package com.hanbit.team02.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.hanbit.team02.core.translation.XmlToJSON;

@Controller
public class XMLtranslatior {

	private static final Logger LOGGER = LoggerFactory.getLogger(MemberController.class);
	
	@Autowired
	private XmlToJSON xmltojson;
	
	
	
	
}
