$(function(){
	function addStationsData() {
		
	}
	addStationsData();
	
	
	
	
	
	$(".applyBtn").on("click", function() {
		var trainId = $("#txtTrainId").val().trim();
		var seatNumber = $("#txtSeatNumber").val().trim();
		var reservedNumber = $("#txtReservedNumber").val().trim();
		var name = $("#txtName").val().trim();
		var reservedTime = $("#txtReservedTime").val().trim();
		var cancel = $("#txtCancel").val().trim();

		var data = {
			trainId: trainId,
			seatNumber: seatNumber,
			reservedNumber: reservedNumber,
			name: name,
			reservedTime: reservedTime,
			cancel: cancel
		};

		$.ajax({
			url: "/api/test",
			method: "POST",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			data: JSON.stringify(data)
		}).done(function(result) {
			var name = result.name;

			alert(name + "님 환영합니다.");
		}).fail(function() {
			alert("사용자가 폭주하여 잠시 후 사용해주세요.");
		});
	});
});