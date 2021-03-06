package com.hanbit.team02.core.service;

import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hanbit.team02.core.dao.TicketDAO;
import com.hanbit.team02.core.session.SessionHelpler;
import com.hanbit.team02.core.vo.MemberVO;
import com.hanbit.team02.core.vo.TicketVO;

@Service
public class TrainTicketingService {

	private static final Logger LOGGER = LoggerFactory.getLogger(TrainTicketingService.class);

	@Autowired
	private TicketDAO ticketDAO;

	//예매
	@Transactional
	public int reserveTicket(TicketVO ticket) {
		LOGGER.debug("티켓 예매");

		String memberId = SessionHelpler.getSession().getMemberId();
		ticket.setMemberId(memberId);

		int result = ticketDAO.reserveTicket(ticket);
//		ticketDAO.insertShares(false, true, ticket.getReservedNumber(), memberId);

		return result;
	}

	//예매목록
	public List<TicketVO> getReservedTickets(int page, int cancel) {
		LOGGER.debug("예매목록");

		String memberId = SessionHelpler.getSession().getMemberId();

		List<TicketVO> tickets = ticketDAO.selectTickets(page, cancel, memberId);

		if(cancel==0){
			return tickets;
		}
		else{
			throw new RuntimeException("예매 내역이 없습니다.");
		}
	}

	//예매건수
	public int countReserved(int cancel) {
		LOGGER.debug("예매건수");

		String memberId = SessionHelpler.getSession().getMemberId();

		if(cancel==0){
			return ticketDAO.countTickets(cancel, memberId);
		}
		else {
			throw new RuntimeException("예매 내역이 없습니다.");
		}
	}

	//예매목록 (관리자 기능)
	public List<TicketVO> getReservedTicketsAdmin(int page, int cancel) {
		LOGGER.debug("예매목록");

		List<TicketVO> tickets = ticketDAO.selectTicketsAdmin(page, cancel);

		if(cancel==0){
			return tickets;
		}
		else{
			throw new RuntimeException("예매 내역이 없습니다.");
		}
	}

	//예매건수 (관리자 기능)
	public int countReservedAdmin(int cancel) {
		LOGGER.debug("예매건수");

		if(cancel==0){
			return ticketDAO.countTicketsAdmin(cancel);
		}
		else {
			throw new RuntimeException("예매 내역이 없습니다.");
		}
	}

	/*예매 상세보기
	public TicketVO getReservedTrainTicket(String reservedNumber, int cancel) {
		LOGGER.debug("예매 상세보기");

		String memberId = SessionHelpler.getSession().getMemberId();

		TicketVO info = ticketDAO.selectTicket(reservedNumber, cancel, memberId);

		if(cancel==0){
			return info;
		}
		else{
			throw new RuntimeException("예매 내역이 없습니다.");
		}
	}
	*/

	/*공유 취소
	public int cancelShared(boolean groupYn) {
		LOGGER.debug("공유 취소");

		String memberId = SessionHelpler.getSession().getMemberId();

		int result = ticketDAO.cancelShares(groupYn, memberId);
		return result;
	}
	*/

	//취소
	public int cancelTicket(TicketVO ticket) {
		LOGGER.debug("예매 취소");

		String memberId = SessionHelpler.getSession().getMemberId();
		ticket.setMemberId(memberId);

		int result = ticketDAO.cancelTicket(ticket);
		return result;
	}

	//취소목록
	public List<TicketVO> getCanceledTickets(int page, int cancel) {
		LOGGER.debug("취소목록");

		String memberId = SessionHelpler.getSession().getMemberId();

		List<TicketVO> tickets = ticketDAO.selectTickets(page, cancel, memberId);

		if(cancel!=0){
			return tickets;
		}
		else{
			throw new RuntimeException("취소 내역이 없습니다.");
		}
	}

	//취소건수
	public int countCanceled(int cancel) {
		LOGGER.debug("취소건수");

		String memberId = SessionHelpler.getSession().getMemberId();

		if(cancel!=0){
			return ticketDAO.countTickets(cancel, memberId);
		}
		else {
			throw new RuntimeException("취소 내역이 없습니다.");
		}
	}

	//취소목록 (관리자 기능)
	public List<TicketVO> getCanceledTicketsAdmin(int page, int cancel) {
		LOGGER.debug("취소목록");

		List<TicketVO> tickets = ticketDAO.selectTicketsAdmin(page, cancel);

		if(cancel!=0){
			return tickets;
		}
		else{
			throw new RuntimeException("취소 내역이 없습니다.");
		}
	}

	//취소건수 (관리자 기능)
	public int countCanceledAdmin(int cancel) {
		LOGGER.debug("취소건수");

		if(cancel!=0){
			return ticketDAO.countTicketsAdmin(cancel);
		}
		else {
			throw new RuntimeException("취소 내역이 없습니다.");
		}
	}

	/*취소 상세보기
	public TicketVO getCanceledTrainTicket(String reservedNumber, int cancel) {
		LOGGER.debug("취소 상세보기");

		String memberId = SessionHelpler.getSession().getMemberId();

		if(cancel!=0){
			return ticketDAO.selectTicket(reservedNumber, cancel, memberId);
		}
		else{
			throw new RuntimeException("취소 내역이 없습니다.");
		}
	}*/

	//예매번호 생성
	public String generateNumber() {
		String time = String.valueOf(System.currentTimeMillis());
		String threadNumber = String.valueOf(Thread.currentThread().getId());
		threadNumber = StringUtils.leftPad(threadNumber, 4, "0");

		String uniqueNumber = time + threadNumber;

		return uniqueNumber;
	}
}
