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

	// 티켓 예매하기
	public int reserveTicket(TicketVO ticket) {
		int result = sqlSession.insert("ticket.reserveTicket", ticket);
		return result;
	}

	// 티켓 목록 보기
	public List<TicketVO> selectTickets(String name, int cancel) {
		Map params = new HashMap();
		params.put("name", name);
		params.put("cancel", cancel);

		List<TicketVO> result = sqlSession.selectList("ticket.selectTickets", params);
		return result;
	}

	// 티켓 상세 보기
	public TicketVO selectTicket(String reservedNumber, int cancel) {
		Map params = new HashMap();
		params.put("reservedNumber", reservedNumber);
		params.put("cancel", cancel);

		TicketVO ticket = sqlSession.selectOne("ticket.selectTicket", params);
		return ticket;
	}

	// 티켓 취소하기
	public int cancelTicket(TicketVO ticket) {
		int result = sqlSession.update("ticket.cancelTicket", ticket);
		return result;
	}
}
