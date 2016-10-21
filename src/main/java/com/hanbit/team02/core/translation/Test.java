package com.hanbit.team02.core.translation;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

import net.sf.json.JSONObject;
import net.sf.json.xml.XMLSerializer;

public class Test {
    public static void main(String[] args) throws IOException {
    	XmlToJSON json = new XmlToJSON();
    	String jsonString = json.XmlToJson("getCtyCodeList", "999", "1");
    	System.out.println(jsonString);
    	
    }
}