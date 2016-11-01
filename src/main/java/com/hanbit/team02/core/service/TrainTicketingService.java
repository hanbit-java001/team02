package com.hanbit.team02.core.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hanbit.team02.core.dao.TicketDAO;
import com.hanbit.team02.core.session.SessionHelpler;
import com.hanbit.team02.core.vo.TicketVO;

@Service
public class TrainTicketingService {

	private static final Logger LOGGER = LoggerFactory.getLogger(TrainTicketingService.class);

	@Autowired
	private TicketDAO ticketDAO;

	//예매하기
	@Transactional
	public int reserveTrainTicket(TicketVO ticket) {
		LOGGER.debug("티켓 예매");

		String memberId = SessionHelpler.getSession().getMemberId();
		ticket.setMemberId(memberId);

		int result = ticketDAO.reserveTicket(ticket);
		ticketDAO.insertShares(false, true, ticket.getReservedNumber(), memberId);

		return result;
	}

	//예매 목록보기
	public List<TicketVO> getReservedTrainTickets(int cancel) {
		LOGGER.debug("예매 티켓 목록 가져오기");

		String memberId = SessionHelpler.getSession().getMemberId();

		if(cancel==0){
			return ticketDAO.selectTickets(cancel, memberId);
		}
		else{
			throw new RuntimeException("예매 내역이 없습니다.");
		}
	}

	//예매 상세보기
	public TicketVO getReservedTrainTicket(String reservedNumber, int cancel) {
		LOGGER.debug("예매 티켓 상세보기");

		String memberId = SessionHelpler.getSession().getMemberId();

		if(cancel==0){
			return ticketDAO.selectTicket(reservedNumber, cancel, memberId);
		}
		else{
			throw new RuntimeException("예매 내역이 없습니다.");
		}
	}

	//예매건수
	public int countReserved(String reservedNumber, int cancel) {
		LOGGER.debug("예매건수");

		String memberId = SessionHelpler.getSession().getMemberId();

		if(cancel==0){
			return ticketDAO.countTicket(reservedNumber, cancel, memberId);
		}
		else{
			throw new RuntimeException("예매 내역이 없습니다.");
		}
	}

	//공유 취소하기
	public int cancelShared(boolean groupYn) {
		LOGGER.debug("공유 취소");

		String memberId = SessionHelpler.getSession().getMemberId();

		int result = ticketDAO.cancelShares(groupYn, memberId);
		return result;
	}

	//취소하기
	public int cancelReservedTrainTicket(TicketVO ticket) {
		LOGGER.debug("예매 취소");

		String memberId = SessionHelpler.getSession().getMemberId();
		ticket.setMemberId(memberId);

		int result = ticketDAO.cancelTicket(ticket);
		return result;
	}

	//취소목록보기
	public List<TicketVO> getCanceledTrainTickets(int cancel) {
		LOGGER.debug("취소 티켓 목록 가져오기");

		String memberId = SessionHelpler.getSession().getMemberId();

		if(cancel!=0){
			return ticketDAO.selectTickets(cancel, memberId);
		}
		else{
			throw new RuntimeException("취소 내역이 없습니다.");
		}
	}

	//취소상세보기
	public TicketVO getCanceledTrainTicket(String reservedNumber, int cancel) {
		LOGGER.debug("취소 티켓 상세보기");

		String memberId = SessionHelpler.getSession().getMemberId();

		if(cancel!=0){
			return ticketDAO.selectTicket(reservedNumber, cancel, memberId);
		}
		else{
			throw new RuntimeException("취소 내역이 없습니다.");
		}
	}

	//취소건수
	public int countCanceled(String reservedNumber, int cancel) {
		LOGGER.debug("취소건수");

		String memberId = SessionHelpler.getSession().getMemberId();

		if(cancel!=0){
			return ticketDAO.countTicket(reservedNumber, cancel, memberId);
		}
		else{
			throw new RuntimeException("취소 내역이 없습니다.");
		}
	}
}
