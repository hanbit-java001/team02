package com.hanbit.team02.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hanbit.team02.core.service.TrainTicketingService;
import com.hanbit.team02.core.session.LoginRequired;
import com.hanbit.team02.core.session.SessionHelpler;
import com.hanbit.team02.core.vo.MemberVO;
import com.hanbit.team02.core.vo.TicketVO;

@Controller
public class TicketingController {

	@Autowired
	private TrainTicketingService trainTicketingService;

	@RequestMapping("/ticketing/ticketing")
	public String ticketing() {
		return "/ticketing/ticketing";
	}

	// 예매
	@LoginRequired
	@RequestMapping("/api/ticketing/book")
	@ResponseBody
	public TicketVO bookTicket(@RequestParam("departure") String departure,
			@RequestParam("arrival") String arrival,
			@RequestParam("depTime") String depTime) {

		String memberName = SessionHelpler.getSession().getName();

		TicketVO result = new TicketVO();
		result.setDepartureStation(departure);
		result.setArrivalStation(arrival);
		result.setReservedTime(depTime);
		result.setName(memberName);

		String reservedNumber = trainTicketingService.generateNumber();
		result.setReservedNumber(reservedNumber);

		int countAdded = trainTicketingService.reserveTicket(result);

		if (countAdded == 0) {
			throw new RuntimeException("잠시 후 이용해주세요.");
		}
		return result;
	}


	@RequestMapping("/ticketing/reservations")
	public String reservations() {
		return "ticketing/reservations";
	}

	// 예매목록
	@LoginRequired
	@RequestMapping("/api/ticketing/bookedTickets")
	@ResponseBody
	public Map<String, Object> bookedTickets(@RequestParam("page") int page,
			@RequestParam("cancel") int cancel) {
		Map<String, Object> pagingTickets = new HashMap<>();

		List<TicketVO> tickets = trainTicketingService.getReservedTickets(page, cancel);
		int totalCount = trainTicketingService.countReserved(cancel);

		pagingTickets.put("totalCount", totalCount);
		pagingTickets.put("tickets", tickets);

		return pagingTickets;
	}

	// 예매건수
	@LoginRequired
	@RequestMapping("/api/ticketing/countBooked")
	@ResponseBody
	public Map countBooked(@RequestParam("cancel") int cancel) {

		int eventCount = trainTicketingService.countReserved(cancel);

		Map ticket = new HashMap();

		ticket.put("eventCount", eventCount);

		return ticket;
	}

	// 예매 상세보기
	@LoginRequired
	@RequestMapping("/api/ticketing/bookedTicket")
	@ResponseBody
	public TicketVO bookedTicket(@RequestParam("reservedNumber") String reservedNumber,
			@RequestParam("cancel") int cancel) {
		return trainTicketingService.getReservedTrainTicket(reservedNumber, cancel);
	}

	@RequestMapping("/ticketing/totalReservations")
	public String totalReservations() {
		return "ticketing/totalReservations";
	}

	// 예매목록  (관리자 기능)
	@LoginRequired
	@RequestMapping("/api/ticketing/bookedTicketsAdmin")
	@ResponseBody
	public Map<String, Object> bookedTicketsAdmin(@RequestParam("page") int page,
			@RequestParam("cancel") int cancel) {
		Map<String, Object> pagingTickets = new HashMap<>();

		List<TicketVO> tickets = trainTicketingService.getReservedTicketsAdmin(page, cancel);
		int totalCount = trainTicketingService.countReservedAdmin(cancel);

		pagingTickets.put("totalCount", totalCount);
		pagingTickets.put("tickets", tickets);

		return pagingTickets;
	}

	// 예매건수  (관리자 기능)
	@LoginRequired
	@RequestMapping("/api/ticketing/countBookedAdmin")
	@ResponseBody
	public Map countBookedAdmin(@RequestParam("cancel") int cancel) {

		int eventCount = trainTicketingService.countReservedAdmin(cancel);

		Map ticket = new HashMap();

		ticket.put("eventCount", eventCount);

		return ticket;
	}

	/* 공유 취소
	@LoginRequired
	@RequestMapping("api/ticketing/revokeShares")
	@ResponseBody
	public Map revokeShares(@RequestParam("groupYn") boolean groupYn) {
		int countRevokedShares = trainTicketingService.cancelShared(groupYn);

		if (countRevokedShares == 0) {
			throw new RuntimeException("공유 취소 권한이 없습니다.");
		}

		Map result = new HashMap();
		result.put("countRevokedShares", countRevokedShares);

		return result;
	}
	*/

	// 취소
	@LoginRequired
	@RequestMapping("/api/ticketing/revoke")
	@ResponseBody
	public TicketVO revokeTicket(@RequestBody TicketVO ticket) {
		int countRevoked = trainTicketingService.cancelTicket(ticket);

		if (countRevoked == 0) {
			throw new RuntimeException("예매 취소 권한이 없습니다.");
		}
		return ticket;
	}

	@RequestMapping("/ticketing/cancelations")
	public String cancelations() {
		return "ticketing/cancelations";
	}

	// 취소목록
	@LoginRequired
	@RequestMapping("/api/ticketing/revokedTickets")
	@ResponseBody
	public Map<String, Object> revokedTickets(@RequestParam("page") int page,
			@RequestParam("cancel") int cancel) {
		Map<String, Object> pagingTickets = new HashMap<>();

		List<TicketVO> tickets = trainTicketingService.getCanceledTickets(page, cancel);
		int totalCount = trainTicketingService.countCanceled(cancel);

		pagingTickets.put("totalCount", totalCount);
		pagingTickets.put("tickets", tickets);

		return pagingTickets;
	}

	// 취소건수
	@LoginRequired
	@RequestMapping("/api/ticketing/countRevoked")
	@ResponseBody
	public Map countRevoked(@RequestParam("cancel") int cancel) {

		int eventCount = trainTicketingService.countCanceled(cancel);

		Map ticket = new HashMap();

		ticket.put("eventCount", eventCount);

		return ticket;
	}

	// 취소상세보기
	@LoginRequired
	@RequestMapping("/api/ticketing/revokedTicket")
	@ResponseBody
	public TicketVO revokedTicket(@RequestParam("reservedNumber") String reservedNumber,
			@RequestParam("cancel") int cancel) {
		return trainTicketingService.getCanceledTrainTicket(reservedNumber, cancel);
	}

	@RequestMapping("/ticketing/totalCancelations")
	public String totalCancelations() {
		return "ticketing/totalCancelations";
	}

	// 취소목록  (관리자 기능)
	@LoginRequired
	@RequestMapping("/api/ticketing/revokedTicketsAdmin")
	@ResponseBody
	public Map<String, Object> revokedTicketsAdmin(@RequestParam("page") int page,
			@RequestParam("cancel") int cancel) {
		Map<String, Object> pagingTickets = new HashMap<>();

		List<TicketVO> tickets = trainTicketingService.getCanceledTicketsAdmin(page, cancel);
		int totalCount = trainTicketingService.countCanceledAdmin(cancel);

		pagingTickets.put("totalCount", totalCount);
		pagingTickets.put("tickets", tickets);

		return pagingTickets;
	}

	// 취소건수  (관리자 기능)
	@LoginRequired
	@RequestMapping("/api/ticketing/countRevokedAdmin")
	@ResponseBody
	public Map countRevokedAdmin(@RequestParam("cancel") int cancel) {

		int eventCount = trainTicketingService.countCanceledAdmin(cancel);

		Map ticket = new HashMap();

		ticket.put("eventCount", eventCount);

		return ticket;
	}
}