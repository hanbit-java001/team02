package com.hanbit.team02.core.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hanbit.team02.core.dao.MemberDAO;
import com.hanbit.team02.core.vo.MemberVO;

@Service
public class SecurityService {

	private static final Logger LOGGER = LoggerFactory.getLogger(SecurityService.class);

	private static PasswordEncoder encoder = new BCryptPasswordEncoder(4);

	@Autowired
	private MemberDAO memberDAO;

	public String encryptPassword(String password) {
		return encoder.encode(password);
	}

	public boolean matchPassword(String rawPassword, String encryptPassword) {
		return encoder.matches(rawPassword, encryptPassword);
	}

	public MemberVO getValidMember(String memberId, String password) {
		MemberVO member = MemberDAO.selectMember(memberId);

		if(memberId==null) {
			throw new Exception("존재하지 않는 아이디입니다.");
		}

		String encryptedPassword = member.getPassword();

		if(!matchPassword(password, encryptedPassword)) {
			throw new Exception("비밀번호가 틀렸습니다.");
		}

		return member;
	}
}
