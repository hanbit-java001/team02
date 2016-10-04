package com.hanbit.team02.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hanbit.team02.core.service.TrainTicketingService;
import com.hanbit.team02.core.vo.TicketVO;

@Controller
public class TicketingController {

	@Autowired
	private TrainTicketingService trainTicketingService;

	@RequestMapping("/ticketing/ticketing")
	public String ticketing() {
		return "/ticketing/ticketing";
	}

	@RequestMapping("/api/ticketing/ticketing")
	@ResponseBody
	public List<TicketVO> getReservedTrainTickets(@RequestParam("name") String name, @RequestParam("cancel") int cancel) {
		return trainTicketingService.getReservedTrainTickets(name, cancel);
	}

}
