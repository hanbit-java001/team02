package com.hanbit.team02.web.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hanbit.team02.core.service.SecurityService;
import com.hanbit.team02.core.session.Session;
import com.hanbit.team02.core.session.SessionHelpler;
import com.hanbit.team02.core.vo.MemberVO;

@Controller
public class SecurityController {

	@Autowired
	private SecurityService securityService;

	@RequestMapping("/api/security/login")
	@ResponseBody
	public Map login(@RequestParam("memberId") String memberId,
			@RequestParam("password") String password) {

		MemberVO member = securityService.getValidMember(memberId, password);

		Session session = SessionHelpler.getSession();
		session.setLoggedIn(true);
		session.setName(member.getName());
		session.setMemberId(memberId);
		session.setEmail(member.getEmail());
		session.setPhoneNumber(member.getPhoneNumber());

		Map result = new HashMap();
		result.put("name", member.getName());

		return result;
	}

	@RequestMapping("/api/security/isLoggedIn")
	@ResponseBody
	public Map isLoggedIn() {

		Map result = new HashMap();

		Session session = SessionHelpler.getSession();

		if(!session.isLoggedIn()) {
			result.put("name", "");
		} else {
			result.put("name", session.getName());
		}
		return result;
	}

	@RequestMapping("/api/security/logout")
	public void logout(HttpServletResponse response) throws Exception {
		Session session = SessionHelpler.getSession();
		session.logout();

		response.sendRedirect("/");
	}
}