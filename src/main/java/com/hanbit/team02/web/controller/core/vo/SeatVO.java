package com.hanbit.team02.web.controller.core.vo;

public class SeatVO {
 private int trainId;
 private String seatNumber;
 private String seatLevel;
 private String seatPrice;
 
 
@Override
public String toString() {
	return "SeatVO [trainId=" + trainId + ", seatNumber=" + seatNumber + ", seatLevel=" + seatLevel + ", seatPrice="
			+ seatPrice + "]";
}

public int getTrainId() {
	return trainId;
}
public void setTrainId(int trainId) {
	this.trainId = trainId;
}
public String getSeatNumber() {
	return seatNumber;
}
public void setSeatNumber(String seatNumber) {
	this.seatNumber = seatNumber;
}
public String getSeatLevel() {
	return seatLevel;
}
public void setSeatLevel(String seatLevel) {
	this.seatLevel = seatLevel;
}
public String getSeatPrice() {
	return seatPrice;
}
public void setSeatPrice(String seatPrice) {
	this.seatPrice = seatPrice;
}
 
 
}
