package com.hanbit.team02.web.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;

import com.hanbit.team02.core.service.StationService;

@Controller
public class StationController {
	private static final Logger LOGGER = LoggerFactory.getLogger(StationController.class);

	@Autowired
	private StationService stationService;
	
//	public Map<String, Object> citiesCodes(@RequestParam("page") int page){
//		Map<String, Object> paging
//		return null;
//		
//	}
}
