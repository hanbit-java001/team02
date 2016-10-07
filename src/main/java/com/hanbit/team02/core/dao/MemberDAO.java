package com.hanbit.team02.core.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hanbit.team02.core.vo.MemberVO;

@Repository
public class MemberDAO {

	@Autowired
	private SqlSession sqlSession;
	


	public static int countMember(String memberId) {
		// TODO Auto-generated method stub
		return 0;
	}



	public static void insertMember(MemberVO member) {
		// TODO Auto-generated method stub
		
	}



	public List<MemberVO> selectMembers(String memberId) {
		// TODO Auto-generated method stub
		return null;
	}



	public MemberVO selectMember(String memberId) {
		// TODO Auto-generated method stub
		return null;
	}



	public static String selectPassword(String memberId) {
		// TODO Auto-generated method stub
		return null;
	}



	public boolean updateMember(MemberVO member) {
		// TODO Auto-generated method stub
		return false;
	}



	public boolean deleteMember(MemberVO member) {
		// TODO Auto-generated method stub
		return false;
	}
}
