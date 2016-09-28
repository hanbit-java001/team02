package com.hanbit.team02.core.vo;

public class TrainVO {
	private int trainId;
	private String trainType;
	private int depTime;
	private int arrTime;
	private String departure;
	private String arrival;

	public int getTrainId() {
		return trainId;
	}
	public void setTrainId(int trainId) {
		this.trainId = trainId;
	}
	public String getTrainType() {
		return trainType;
	}
	public void setTrainType(String trainType) {
		this.trainType = trainType;
	}
	public int getDepTime() {
		return depTime;
	}
	public void setDepTime(int depTime) {
		this.depTime = depTime;
	}
	public int getArrTime() {
		return arrTime;
	}
	public void setArrTime(int arrTime) {
		this.arrTime = arrTime;
	}
	public String getDeparture() {
		return departure;
	}
	public void setDeparture(String departure) {
		this.departure = departure;
	}
	public String getArrival() {
		return arrival;
	}
	public void setArrival(String arrival) {
		this.arrival = arrival;
	}
}
