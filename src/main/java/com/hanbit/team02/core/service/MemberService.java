package com.hanbit.team02.core.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.StandardPasswordEncoder;
import org.springframework.stereotype.Service;

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
	public String joinMember(MemberVO member) {
		LOGGER.debug("회원으로 가입됨");
		int countMember = MemberDAO.countMember(member.getMemberId());

		if(countMember>0) {
			throw new Exception("이미 존재하는 아이디입니다.");
		}

		String encryptedPassword = securityService.encryptPassword(member.getPassword());
		member.setPassword(encryptedPassword);

		MemberDAO.insertMember(member);

		return member.getName();
	}

	// 회원목록
	public List<MemberVO> getMembers(String memberId, String email) {
		LOGGER.debug("회원목록 가져옴");
		return memberDAO.selectMembers(memberId, email);
	}

	// 회원정보조회
	public MemberVO getMember(String memberId) {
		LOGGER.debug("회원정보 조회함");
		return memberDAO.selectMember(memberId);
	}

	// 회원정보수정
	public boolean modifyMember(MemberVO member) {
		LOGGER.debug("회원정보가 수정됨");
		return false;
	}

	// 회원탈퇴
	public boolean leaveMember(MemberVO member) {
		LOGGER.debug("회원 탈퇴함");
		return false;
	}
}
