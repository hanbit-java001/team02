package com.hanbit.team02.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

	@RequestMapping("/home/main")
	public String main(){

		return "home/main";
	}

}
