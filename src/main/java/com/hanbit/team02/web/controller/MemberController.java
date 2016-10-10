package com.hanbit.team02.web.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hanbit.team02.core.service.MemberService;
import com.hanbit.team02.core.vo.MemberVO;
import com.hanbit.team02.core.vo.TicketVO;

@Controller
public class MemberController {

	private static final Logger LOGGER = LoggerFactory.getLogger(MemberController.class);

	@Autowired
	private MemberService memberService;

	@RequestMapping("/member/join")
	public String join() {
		return "member/join";
	}

	@RequestMapping("/api/member/join")
	@ResponseBody
	public MemberVO doJoin(@RequestBody MemberVO member) {
		LOGGER.debug("회원가입");

		int countAdded = memberService.joinMember(member);

		if (countAdded == 0) {
			throw new RuntimeException();
		}

		return member;
	}
}
