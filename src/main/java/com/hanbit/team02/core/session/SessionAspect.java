package com.hanbit.team02.core.session;

import java.util.HashMap;
import java.util.Map;

import org.apache.ibatis.binding.MapperMethod.MethodSignature;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class SessionAspect {

//	@Around("@annotation(com.hanbit.team02.core.session.LoginRequired)")
//	public Object checkLogin(ProceedingJoinPoint pjp) throws Throwable {
//
//		Session session = SessionHelpler.getSession();
//
//		if (session.isLoggedIn()) {
//			return pjp.proceed();
//		}
//
//		MethodSignature methodSignature = (MethodSignature) pjp.getSignature();
//		Class returnType = methodSignature.getReturnType();
//
//		if (returnType == String.class) {
//			return "login";
//		}
//
//		Map result = new HashMap();
//		result.put("errorMsg", "로그인이 필요합니다.");
//		return result;
//	}
}
