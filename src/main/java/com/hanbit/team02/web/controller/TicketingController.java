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

	//예매하기
	@LoginRequired
	@RequestMapping("/api/ticketing/add")
	@ResponseBody
	public TicketVO addSchedule(@RequestBody TicketVO ticket) {

		int countAdded = trainTicketingService.reserveTrainTicket(ticket);

		if (countAdded == 0) {
			throw new RuntimeException();
		}
		return ticket;
	}

	//예매목록
	@LoginRequired
	@RequestMapping("/api/ticketing/reservedList")
	@ResponseBody
	public List<TicketVO> getReservedTrainTickets(@RequestParam("name") String name, @RequestParam("cancel") int cancel) {
		return trainTicketingService.getReservedTrainTickets(name, cancel);
	}

	//예매 상세보기
	@LoginRequired
	@RequestMapping("/api/ticketing/reservedDetail")
	@ResponseBody
	public TicketVO getReservedTrainTicket(@RequestParam("reservedNumber") String reservedNumber, @RequestParam("cancel") int cancel) {
		return trainTicketingService.getReservedTrainTicket(reservedNumber, cancel);
	}

	//취소목록
	@LoginRequired
	@RequestMapping("/api/ticketing/canceledList")
	@ResponseBody
	public List<TicketVO> getCanceledTrainTickets(@RequestParam("name") String name, @RequestParam("cancel") int cancel) {
		return trainTicketingService.getCanceledTrainTickets(name, cancel);
	}
}
