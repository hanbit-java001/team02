package com.hanbit.team02.web.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hanbit.team02.core.service.MemberService;
import com.hanbit.team02.core.vo.MemberVO;

@Controller
public class MemberController {

	@Autowired
	private MemberService memberService;

	@RequestMapping("/member/join")
	public String join() {
		return "member/join";
	}

	@RequestMapping(value="/api/member/join", method=RequestMethod.POST)
	@ResponseBody
	public Map doJoin(HttpServletRequest request) {
		String name = request.getParameter("name");
		String memberId = request.getParameter("memberId");
		String password = request.getParameter("password");
		String email = request.getParameter("email");
		String phoneNumber = request.getParameter("phoneNumber");

		MemberVO member = new MemberVO();
		member.setName(name);
		member.setMemberId(memberId);
		member.setPassword(password);
		member.setEmail(email);
		member.setPhoneNumber(phoneNumber);

		memberService.joinMember(member);

		Map result = new HashMap();
		result.put("name", name);

		return result;
	}
}
