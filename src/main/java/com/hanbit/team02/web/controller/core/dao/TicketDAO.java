package com.hanbit.team02.web.controller.core.dao;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hanbit.team02.web.controller.core.vo.TicketVO;

@Repository
public class TicketDAO {

	private static final Logger LOGGER = LoggerFactory.getLogger(TicketDAO.class);

	@Autowired
	public int reserveTicket(TicketVO ticket) {
		return 0;
	}

	public int cancelTicket(int reservedNumber) {
		return reservedNumber;
	}

	public List<TicketVO> selectTickets(int reservedNumber) {
		return null;
	}

	public TicketVO selectTicket(int reservedNumber) {
		return null;
	}
}
