package com.hanbit.team02.core.dao;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CitiesDAO {

	private static final Logger LOGGER = LoggerFactory.getLogger(CitiesDAO.class);
	
	@Autowired
	private SqlSession sqlSession;
	
	public int countCities(String cityCode) {
		return sqlSession.selectOne("cities.countCities", cityCode);
	}
}
