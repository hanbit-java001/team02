package com.hanbit.team02.core.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.StandardPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hanbit.team02.core.dao.MemberDAO;
import com.hanbit.team02.core.vo.MemberVO;

@Service
public class MemberService {

	private static final Logger LOGGER = LoggerFactory.getLogger(MemberService.class);

	PasswordEncoder encoder = new StandardPasswordEncoder();

	@Autowired
	private MemberDAO memberDAO;

	@Autowired
	private SecurityService securityService;

	// 회원가입
	@Transactional
	public int joinMember(MemberVO member) {
		LOGGER.debug("회원가입");

		int countMember = memberDAO.countMember(member.getMemberId());
		int countEmail = memberDAO.countEmail(member.getEmail());
		int countPhoneNumber = memberDAO.countPhoneNumber(member.getPhoneNumber());

		if (countMember > 0) {
			throw new RuntimeException("중복된 아이디입니다.");
		} else if (countEmail > 0){
			throw new RuntimeException("중복된 메일입니다.");
		} else if (countPhoneNumber > 0) {
			throw new RuntimeException("중복된 전화번호입니다.");
		}

		String encryptedPassword = securityService.encryptPassword(member.getPassword());
		member.setPassword(encryptedPassword);

		return memberDAO.insertMember(member);
	}

	// 회원목록
	public List<MemberVO> getMembers(int page) {
		LOGGER.debug("회원목록");

		List<MemberVO> members = memberDAO.selectMembers(page);

		return members;
	}

	// 회원정보 조회
	public MemberVO getMember(String memberId) {
		LOGGER.debug("회원정보 조회");

		return memberDAO.selectMember(memberId);
	}

	// 회원정보 수정
	@Transactional
	public int modifyMember(MemberVO member) {
		LOGGER.debug("회원정보 수정");

		String passwordFromDB = memberDAO.selectPassword(member.getMemberId());
		String passwordCurrent = member.getCurrentPassword();
		String encryptedPasswordCurrent = securityService.encryptPassword(passwordCurrent);

		if (!securityService.matchPassword(passwordFromDB, encryptedPasswordCurrent)) {
			throw new RuntimeException("비밀번호를 잘못 입력하셨습니다.");
		}

		String encryptedPassword = securityService.encryptPassword(member.getPassword());
		member.setPassword(encryptedPassword);

		return memberDAO.updateMember(member);
	}

	// 회원 탈퇴
	@Transactional
	public int leaveMember(MemberVO member) {
		LOGGER.debug("회원 탈퇴");

		String passwordFromDB = memberDAO.selectPassword(member.getMemberId());
		String passwordCurrent = member.getCurrentPassword();
		String encryptedPasswordCurrent = securityService.encryptPassword(passwordCurrent);

		if (!securityService.matchPassword(passwordFromDB, encryptedPasswordCurrent)) {
			throw new RuntimeException("비밀번호를 잘못 입력하셨습니다.");
		}

		String encryptedPassword = securityService.encryptPassword(member.getPassword());
		member.setPassword(encryptedPassword);

		return memberDAO.deleteMember(member);
	}
}
