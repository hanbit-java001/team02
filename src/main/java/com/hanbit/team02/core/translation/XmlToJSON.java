package com.hanbit.team02.core.translation;

import java.io.BufferedInputStream;
import java.net.URL;
 
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
 
public class XmlToJSON {
    
    public XmlToJSON() throws Exception{
         
         JSONParser jsonparser = new JSONParser();
         JSONObject jsonobject = (JSONObject)jsonparser.parse(readUrl());
         JSONObject json =  (JSONObject) jsonobject.get("boxOfficeResult");
         JSONArray array = (JSONArray)json.get("dailyBoxOfficeList");
         for(int i = 0 ; i < array.size(); i++){
             
             JSONObject entity = (JSONObject)array.get(i);
             String movieNm = (String) entity.get("movieNm");
             System.out.println(movieNm);
         }
         
         
    }
    private static String readUrl() throws Exception {
        BufferedInputStream reader = null;
        try {
            URL url = new URL(
                    "http://openapi.tago.go.kr/openapi/service/TrainInfoService/"
                    + "getCtyCodeList.json"
                    + "?ServiceKey=Wx6wZSSkjgV9%2FZWena%2Fr0NZcwetrNNAbNzQpqxaiOKpgws04rbXLlLyEcfRdUNMUaBQdZPHtcjfZL2HFBdi%2BBQ%3D%3D"
                    );
            reader = new BufferedInputStream(url.openStream());
            StringBuffer buffer = new StringBuffer();
            int i;
            byte[] b = new byte[4096];
            while( (i = reader.read(b)) != -1){
              buffer.append(new String(b, 0, i));
            }
            return buffer.toString();
        } finally {
            if (reader != null)
                reader.close();
        }
    }
 
    
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        try {
            new XmlToJSON();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
 
}