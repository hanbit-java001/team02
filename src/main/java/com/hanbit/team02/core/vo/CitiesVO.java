package com.hanbit.team02.core.vo;

public class CitiesVO {
	private String cityName;
	private int cityCode;
	
	public CitiesVO() {
		super();
	}

	public CitiesVO(String cityName, int cityCode) {
		super();
		this.cityName = cityName;
		this.cityCode = cityCode;
	}
	
	public String getCityName() {
		return cityName;
	}
	public void setCityName(String cityName) {
		this.cityName = cityName;
	}
	public int getCityCode() {
		return cityCode;
	}
	public void setCityCode(int cityCode) {
		this.cityCode = cityCode;
	}

	@Override
	public String toString() {
		return "CitiesVO [cityName=" + cityName + ", cityCode=" + cityCode + "]";
	}
	
	
}
