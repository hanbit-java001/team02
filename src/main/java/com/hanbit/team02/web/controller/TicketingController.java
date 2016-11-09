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
import com.hanbit.team02.core.vo.TicketVO;

@Controller
public class TicketingController {

	@Autowired
	private TrainTicketingService trainTicketingService;

	@RequestMapping("/ticketing/ticketing")
	public String ticketing() {
		return "/ticketing/ticketing";
	}

	// 예매하기
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

		int countAdded = trainTicketingService.reserveTrainTicket(result);

		if (countAdded == 0) {
			throw new RuntimeException("잠시 후 이용해주세요.");
		}
		return result;
	}

	// 예매 목록보기 *예매/취소목록 수정해야 함
	@LoginRequired
	@RequestMapping("/api/ticketing/bookedTickets")
	@ResponseBody
	public List<TicketVO> bookedTickets(@RequestParam("cancel") int cancel) {
		return trainTicketingService.getReservedTrainTickets(cancel);
	}

	// 예매 상세보기
	@LoginRequired
	@RequestMapping("/api/ticketing/bookedTicket")
	@ResponseBody
	public TicketVO bookedTicket(@RequestParam("reservedNumber") String reservedNumber,
			@RequestParam("cancel") int cancel) {
		return trainTicketingService.getReservedTrainTicket(reservedNumber, cancel);
	}

	// 예매건수
	@LoginRequired
	@RequestMapping("/api/ticketing/countBooked")
	@ResponseBody
	public Map countBooked(@RequestParam("reservedNumber") String reservedNumber,
			@RequestParam("cancel") int cancel) {

		int eventCount = trainTicketingService.countReserved(reservedNumber, cancel);

		Map ticket = new HashMap();

		ticket.put("eventCount", eventCount);

		return ticket;
	}


	/* 공유 취소하기
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

	// 취소하기
	@LoginRequired
	@RequestMapping("/api/ticketing/revoke")
	@ResponseBody
	public TicketVO revokeTicket(@RequestBody TicketVO ticket) {
		int countRevoked = trainTicketingService.cancelReservedTrainTicket(ticket);

		if (countRevoked == 0) {
			throw new RuntimeException("예매 취소 권한이 없습니다.");
		}
		return ticket;
	}

	// 취소 목록보기
	@LoginRequired
	@RequestMapping("/api/ticketing/revokedTickets")
	@ResponseBody
	public List<TicketVO> revokedTickets(@RequestParam("cancel") int cancel) {
		return trainTicketingService.getCanceledTrainTickets(cancel);
	}

	// 취소상세보기
	@LoginRequired
	@RequestMapping("/api/ticketing/revokedTicket")
	@ResponseBody
	public TicketVO revokedTicket(@RequestParam("reservedNumber") String reservedNumber,
			@RequestParam("cancel") int cancel) {
		return trainTicketingService.getCanceledTrainTicket(reservedNumber, cancel);
	}

	// 취소건수
	@LoginRequired
	@RequestMapping("/api/ticketing/countRevoked")
	@ResponseBody
	public Map countRevoked(@RequestParam("reservedNumber") String reservedNumber,
			@RequestParam("cancel") int cancel) {

		int eventCount = trainTicketingService.countCanceled(reservedNumber, cancel);

		Map ticket = new HashMap();

		ticket.put("eventCount", eventCount);

		return ticket;
	}
}