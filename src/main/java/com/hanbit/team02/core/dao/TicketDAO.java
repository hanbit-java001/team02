package com.hanbit.team02.core.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hanbit.team02.core.vo.TicketVO;

@Repository
public class TicketDAO {

	private static final Logger LOGGER = LoggerFactory.getLogger(TicketDAO.class);

	@Autowired
	private SqlSession sqlSession;

	// 공유 관련
//	public int insertShares(boolean groupYn, boolean ownerYn, String reservedNumber, String shareId) {
//		Map params = new HashMap();
//
//		params.put("groupYn", groupYn? "Y":"N");
//		params.put("ownerYn", ownerYn? "Y":"N");
//		params.put("reservedNumber", reservedNumber);
//		params.put("shareId", shareId);
//
//		int result = sqlSession.insert("ticket.insertShares", params);
//		return result;
//	}

	// 티켓 예매
	public int reserveTicket(TicketVO ticket) {
		int result = sqlSession.insert("ticket.reserveTicket", ticket);
		return result;
	}

	// 예매/취소 목록
	public List<TicketVO> selectTickets(int page, int cancel, String memberId) {
		Map params = new HashMap();

		params.put("page", page);
		params.put("cancel", cancel);
		params.put("memberId", memberId);

		List<TicketVO> result = sqlSession.selectList("ticket.selectTickets", params);
		return result;
	}

	// 예매/취소 건수
	public int countTickets(int cancel, String memberId) {
		Map params = new HashMap();
		params.put("cancel", cancel);

		return sqlSession.selectOne("ticket.countTickets", params);
	}

	// 예매/취소 목록 (관리자 기능)
	public List<TicketVO> selectTicketsAdmin(int page, int cancel) {
		Map params = new HashMap();

		params.put("page", page);
		params.put("cancel", cancel);

		List<TicketVO> result = sqlSession.selectList("ticket.selectTicketsAdmin", params);
		return result;
	}

	// 예매/취소 건수 (관리자 기능)
	public int countTicketsAdmin(int cancel) {
		return sqlSession.selectOne("ticket.countTicketsAdmin", cancel);
	}

	// 예매/취소 상세 보기
	public TicketVO selectTicket(String reservedNumber, int cancel, String memberId) {
		Map params = new HashMap();

		params.put("reservedNumber", reservedNumber);
		params.put("cancel", cancel);
		params.put("memberId", memberId);

		TicketVO ticket = sqlSession.selectOne("ticket.selectTicket", params);
		return ticket;
	}

	// 티켓 취소
	public int cancelTicket(TicketVO ticket) {
		int result = sqlSession.update("ticket.cancelTicket", ticket);
		return result;
	}

	/* 공유 취소
	public int cancelShares(boolean groupYn, String memberId) {
		Map params = new HashMap();
		params.put("groupYn", groupYn? "Y":"N");
		params.put("memberId", memberId);
		int result = sqlSession.update("ticket.cancelShares", params);
		return result;
	}
	 */
}