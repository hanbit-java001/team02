package com.hanbit.team02.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WelcomeController {
	
	@RequestMapping("/")
	public String welcome(){
		
		return "/home/main";
	}

	
	@RequestMapping("/team02")
	public String team02(){
		
		return "/team02";
	}

}
