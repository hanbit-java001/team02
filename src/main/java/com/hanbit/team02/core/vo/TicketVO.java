package com.hanbit.team02.core.vo;

import java.util.Date;

public class TicketVO {
	private int trainId;
	private String seatNumber;
	private String reservedNumber;
	private String name;
	private Date reservedTime;
	private int cancel;

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
	public String getReservedNumber() {
		return reservedNumber;
	}
	public void setReservedNumber(String reservedNumber) {
		this.reservedNumber = reservedNumber;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getReservedTime() {
		return reservedTime;
	}
	public void setReservedTime(Date reservedTime) {
		this.reservedTime = reservedTime;
	}
	public int getCancel() {
		return cancel;
	}
	public void setCancel(int cancel) {
		this.cancel = cancel;
	}
}
