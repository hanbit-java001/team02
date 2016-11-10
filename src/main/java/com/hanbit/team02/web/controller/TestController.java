package com.hanbit.team02.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hanbit.team02.core.service.TrainTicketingService;
import com.hanbit.team02.core.vo.TicketVO;

@Controller
public class TestController {

	private static final Logger LOGGER = LoggerFactory.getLogger(TestController.class);

	@Autowired
	private TrainTicketingService trainTicketingService;

	@RequestMapping("/test")
	public String test() {

		return "test";
	}

	@RequestMapping("/api/test")
	@ResponseBody
	public TicketVO addSchedule(@RequestBody TicketVO ticket) {

		int countAdded = trainTicketingService.reserveTicket(ticket);

		if (countAdded == 0) {
			throw new RuntimeException();
		} else {
			System.out.println("추가됨");
		}

		return ticket;
	}
}
