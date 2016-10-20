package com.hanbit.team02.web.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hanbit.team02.core.service.MemberService;
import com.hanbit.team02.core.session.LoginRequired;
import com.hanbit.team02.core.vo.MemberVO;

@Controller
public class MemberController {

	private static final Logger LOGGER = LoggerFactory.getLogger(MemberController.class);

	@Autowired
	private MemberService memberService;

	@RequestMapping("/member/join")
	public String join() {
		return "member/join";
	}

	// 회원가입
	@RequestMapping("/api/member/join")
	@ResponseBody
	public MemberVO doJoin(@RequestBody MemberVO member) {
		LOGGER.debug("회원가입");

		int countAdded = memberService.joinMember(member);

		if (countAdded == 0) {
			throw new RuntimeException("잠시 후 이용해주세요.");
		}

		return member;
	}

	// 회원목록
	@LoginRequired
	@RequestMapping("/api/member/viewMembers")
	@ResponseBody
	public List<MemberVO> viewMembers(@RequestParam("page") int page) {
		LOGGER.debug("회원목록");

		List<MemberVO> members = memberService.getMembers(page);

		return members;
	}

	// 회원정보 조회
	@LoginRequired
	@RequestMapping("/api/member/viewMember")
	@ResponseBody
	public MemberVO viewMember(@RequestParam("memberId") String memberId) {
		LOGGER.debug("회원정보 조회");

		return memberService.getMember(memberId);
	}

	// 회원정보 수정
	@LoginRequired
	@RequestMapping("/api/member/editMember")
	@ResponseBody
	public MemberVO editMember(@RequestBody MemberVO member) {
		LOGGER.debug("회원정보 수정");

		int countEditted = memberService.modifyMember(member);

		if(countEditted == 0) {
			throw new RuntimeException("잠시 후 이용해주세요.");
		}

		return member;
	}

	// 회원 탈퇴
	@LoginRequired
	@RequestMapping("/api/member/removeMember")
	@ResponseBody
	public MemberVO removeMember(@RequestBody MemberVO member) {
		LOGGER.debug("회원 탈퇴");

		int countRemoved = memberService.leaveMember(member);

		if(countRemoved == 0) {
			throw new RuntimeException("잠시 후 이용해주세요.");
		}

		return member;
	}
}
