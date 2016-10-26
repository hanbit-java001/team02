package com.hanbit.team02.web.controller;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hanbit.team02.core.translation.XmlToJSON;

@Controller
public class XMLtranslationControllor {

	private static final Logger LOGGER = LoggerFactory.getLogger(MemberController.class);
	
	@Autowired
	private XmlToJSON xmltojson;
	
	@RequestMapping(value="/api/get/citycode", produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	@ResponseBody
	public String xmlTranslator(@RequestParam("operatorName") String operatorName,
			@RequestParam("searchingCountNum") String searchingCountNum,
			@RequestParam("pageNum") String pageNum) throws IOException{
		
		String result = xmltojson.XmlToJson(operatorName, searchingCountNum, pageNum);
		return result;
	}
	
	
}
