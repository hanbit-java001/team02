package com.hanbit.team02.core.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hanbit.team02.core.dao.TicketDAO;
import com.hanbit.team02.core.vo.TicketVO;

@Service
public class TrainTicketingService {

	private static final Logger LOGGER = LoggerFactory.getLogger(TrainTicketingService.class);

	@Autowired
	private TicketDAO ticketDAO;

	//예매하기
	public int reserveTrainTicket(TicketVO ticket) {
		LOGGER.debug("티켓 예매");
		return ticketDAO.reserveTicket(ticket);
	}
	
	//예매 목록보기
	public List<TicketVO> getReservedTrainTickets(String name, int cancel) {
		LOGGER.debug("예매 티켓 목록 가져오기");
		if(cancel==0){
			return ticketDAO.selectTickets(name, cancel);
		}
		else{
			return null;
		}
	}

	//예매 상세보기
	public TicketVO getReservedTrainTicket(String reservedNumber, int cancel) {
		LOGGER.debug("예매 티켓 상세보기");
		if(cancel==0){
			return ticketDAO.selectTicket(reservedNumber, cancel);	
		}
		else{
			return null;
		}
	}
	
	//취소하기
	public int cancelReservedTrainTicket(String reservedNumber) {
		return ticketDAO.cancelTicket(reservedNumber);
	}
	
	//취소목록보기
	public List<TicketVO> getCanceledTrainTickets(String name, int cancel) {
		LOGGER.debug("취소 티켓 목록 가져오기");
		if(cancel!=0){
			return ticketDAO.selectTickets(name, cancel);	
		}
		else{
			return null;
		}
	}

	//취소상세보기
	public TicketVO getCanceledTrainTicket(String reservedNumber, int cancel) {
		LOGGER.debug("취소 티켓 상세보기");
		if(cancel!=0){
			return ticketDAO.selectTicket(reservedNumber, cancel);	
		}
		else{
			return null;
		}
	}
}
