package com.hanbit.team02.core.vo;

public class TicketVO {
	private int trainId;
	private String seatNumber;
	private int reservedNumber;
	private String name;
	private int reservedTime;
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
	public int getReservedNumber() {
		return reservedNumber;
	}
	public void setReservedNumber(int reservedNumber) {
		this.reservedNumber = reservedNumber;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getReservedTime() {
		return reservedTime;
	}
	public void setReservedTime(int reservedTime) {
		this.reservedTime = reservedTime;
	}
	public int getCancel() {
		return cancel;
	}
	public void setCancel(int cancel) {
		this.cancel = cancel;
	}
}
