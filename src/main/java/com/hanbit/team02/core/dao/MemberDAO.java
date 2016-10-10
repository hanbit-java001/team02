package com.hanbit.team02.core.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hanbit.team02.core.vo.MemberVO;

@Repository
public class MemberDAO {

	@Autowired
	private SqlSession sqlSession;

	private int sqlForGetPara(String statement, Object parameter){
		
		int result = sqlSession.selectOne(statement, parameter);
		
		return result;
	}
	
	public int countMember(String memberId) {
		return sqlForGetPara("member.countMember", memberId);
	}



	public int insertMember(MemberVO member) {
		return sqlSession.insert("member.insertMember", member);
	}



	public List<MemberVO> selectMembers(String memberId) {
		return null;
	}



	public MemberVO selectMember(String memberId) {
		Map param = new HashMap();
		param.put("memberId", memberId);
		
		return sqlSession.selectOne("member.selectMember", param);
	}



	public String selectPassword(String memberId) {
		return sqlSession.selectOne("member.selectPassword", memberId);
	}



	public int updateMember(MemberVO member) {
		return sqlSession.update("member.updateMember", member);
	}



	public int deleteMember(MemberVO member) {
		return sqlSession.delete("member.updateMember", member);
	}
}
