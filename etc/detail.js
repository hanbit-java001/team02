$(function() {
	function addTicket(reservedNumber, name, reservedTime, departureStation, arrivalStation) {

		var ticketHTML = "";

		ticketHTML += "<table class='table table-hover'>";
		ticketHTML += "<tr>";
		ticketHTML += "<th class='header-cell-width'>"+'이름'+"</th>";
		ticketHTML += "<td class='ticket-cell-width'>"+name+"</td>";
		ticketHTML += "</tr>";
		ticketHTML += "<tr>";
		ticketHTML += "<th class='header-cell-width'>"+'예매번호'+"</th>";
		ticketHTML += "<td class='ticket-cell-width'>"+reservedNumber+"</td>";
		ticketHTML += "</tr>";
		ticketHTML += "<tr>";
		ticketHTML += "<th class='header-cell-width'>"+'예매시간'+"</th>";
		ticketHTML += "<td class='ticket-cell-width'>"+reservedTime+"</td>";
		ticketHTML += "</tr>";
		ticketHTML += "<tr>";
		ticketHTML += "<th class='header-cell-width'>"+'출발역'+"</th>";
		ticketHTML += "<td class='ticket-cell-width'>"+departureStation+"</td>";
		ticketHTML += "</tr>";
		ticketHTML += "<tr>";
		ticketHTML += "<th class='header-cell-width'>"+'도착역'+"</th>";
		ticketHTML += "<td class='ticket-cell-width'>"+arrivalStation+"</td>";
		ticketHTML += "</tr>";
		ticketHTML += "<tr>";
		ticketHTML += "<th class='header-cell-width'>"+'취소 여부'+"</th>";
		ticketHTML += '<td input type="text" class="ticket-cell-width" id="txtCancel" placeholder="취소 여부"</td>';
		ticketHTML += "</tr>";
		ticketHTML += "</table>";
		ticketHTML += '<button class="btnCancel btn btn-default">뒤로가기</button>';
		ticketHTML += '<button class="btnDelete btn btn-danger">예매취소</button>';

		$(".ticket-container").append(ticketHTML);

		$(".btnDelete").on("click", function() {
			var cancel = $("#txtCancel").val();

			if (cancel.trim() == "") {
				alert("예매를 취소하려면 1을 입력해주세요.");
				$("#txtPassword").val("");
				$("#txtPassword").focus();
				return;
			}

			var data = {
					cancel: cancel
				};

			callAjax({
				url: "/api/ticketing/revoke",
				method : "POST",
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				data: JSON.stringify(data),
				success : function() {
					alert("예매가 취소되었습니다.");
					location.reload();
				}
			});
		});

		$(".btnCancel").on("click", function() {
			location.href = "/ticketing/ticketing";
		});
	}

	function getTicket(reservedNumber, cancel) {
		callAjax({
			url: "/api/ticketing/revokedTicket",
			method: "POST",
			data: {
				reservedNumber: reservedNumber
				cancel: cancel
			},
			success: function(ticketInfo) {
				var ticket = ticketInfo.info;

				var reservedNumber = ticket.reservedNumber;
				var name = ticket.name;
				var reservedTime = ticket.reservedTime;
				var departureStation = ticket.departureStation;
				var arrivalStation = ticket.arrivalStation;

				addTicket(reservedNumber, name, reservedTime, departureStation, arrivalStation);
			}
		});
	}

	var ticket = ticketInfo.info;
	var cancel = 0;
	var reservedNumber = ticket.reservedNumber;

	getTickets(reservedNumber, cancel);
});