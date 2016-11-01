package com.hanbit.team02.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

	@RequestMapping("/member/list")
	public String list() {
		return "member/list";
	}

	// 회원목록
	@LoginRequired
	@RequestMapping("/api/member/viewMembers")
	@ResponseBody
	public Map<String, Object> listMembers(@RequestParam("page") int page) {
		Map<String, Object> pagingMembers = new HashMap<>();

		List<MemberVO> members = memberService.getMembers(page);
		int totalCount = memberService.getTotalMembers();

		pagingMembers.put("totalCount", totalCount);
		pagingMembers.put("members", members);

		return pagingMembers;
	}

	@RequestMapping("/member/info")
	public String info() {
		return "member/info";
	}

	// 회원정보 조회
	@LoginRequired
	@RequestMapping("/api/member/viewMember")
	@ResponseBody
	public MemberVO viewMember(@RequestParam("memberId") String memberId) {
		LOGGER.debug("회원정보 조회");

		MemberVO member = memberService.getMember(memberId);

		return member;
	}

	// 회원정보 수정
	@LoginRequired
	@RequestMapping("/api/member/editMember")
	@ResponseBody
	public MemberVO editMember(@RequestBody MemberVO member) {
		LOGGER.debug("회원정보 수정");

		int countEdited = memberService.modifyMember(member);

		if(countEdited == 0) {
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
