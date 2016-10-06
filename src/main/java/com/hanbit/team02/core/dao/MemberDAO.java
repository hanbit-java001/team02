package com.hanbit.team02.core.dao;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MemberDAO {
	private static final Logger LOGGER = LoggerFactory.getLogger(TicketDAO.class);

	@Autowired
	private SqlSession sqlSession;

	//멤버 추가
	public int joinMember(MemberDAO member){
		int result = sqlSession.insert("member.joinMember", member);
		return result;
	}
}
