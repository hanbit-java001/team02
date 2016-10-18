package com.hanbit.team02.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hanbit.team02.core.service.TrainTicketingService;
import com.hanbit.team02.core.session.LoginRequired;
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
	public TicketVO bookTicket(@RequestBody TicketVO ticket) {

		int countAdded = trainTicketingService.reserveTrainTicket(ticket);

		if (countAdded == 0) {
			throw new RuntimeException();
		}
		return ticket;
	}

	// 예매 목록보기
	@LoginRequired
	@RequestMapping("/api/ticketing/bookedTickets")
	@ResponseBody
	public List<TicketVO> bookedTickets(@RequestParam("name") String name, @RequestParam("cancel") int cancel) {
		return trainTicketingService.getReservedTrainTickets(name, cancel);
	}

	// 예매 상세보기
	@LoginRequired
	@RequestMapping("/api/ticketing/bookedTicket")
	@ResponseBody
	public TicketVO bookedTicket(@RequestParam("reservedNumber") String reservedNumber,
			@RequestParam("cancel") int cancel) {
		return trainTicketingService.getReservedTrainTicket(reservedNumber, cancel);
	}

	// 취소하기
	@LoginRequired
	@RequestMapping("/api/ticketing/revoke")
	@ResponseBody
	public TicketVO revokeTicket(@RequestBody TicketVO ticket) {
		int countRevoked = trainTicketingService.cancelReservedTrainTicket(ticket);

		if (countRevoked == 0) {
			throw new RuntimeException();
		}
		return ticket;
	}

	// 취소 목록보기
	@LoginRequired
	@RequestMapping("/api/ticketing/revokedTickets")
	@ResponseBody
	public List<TicketVO> revokedTickets(@RequestParam("name") String name, @RequestParam("cancel") int cancel) {
		return trainTicketingService.getCanceledTrainTickets(name, cancel);
	}

	// 취소상세보기
	@LoginRequired
	@RequestMapping("/api/ticketing/revokedTicket")
	@ResponseBody
	public TicketVO revokedTicket(@RequestParam("reservedNumber") String reservedNumber,
			@RequestParam("cancel") int cancel) {
		return trainTicketingService.getCanceledTrainTicket(reservedNumber, cancel);
	}
}