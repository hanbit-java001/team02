$(function() {
	$(".btnConfirm").on("click", function() {
		location.href = "/ticketing/ticketing";
	});

	function addConfirm() {
		var confirmHTML = "";

		confirmHTML += '<button class="btnConfirm btn btn-success">확인</button>';

		$(".ticket-confirm").html(confirmHTML);

		$(".btnConfirm").on("click", function() {
			location.href = "/ticketing/ticketing";
		});
	}

	function addTicket(reservedNumber, name, reservedTime, departureStation, arrivalStation) {

		var ticketHTML = "";

		ticketHTML += "<table class='table table-bordered'>";
		ticketHTML += "<tr>";
		ticketHTML += "<th class='header-cell-width'>"+'예매번호'+"</th>";
		ticketHTML += "<td class='ticket-cell-width'>"+reservedNumber+"</td>";
		ticketHTML += "</tr>";
		ticketHTML += "<tr>";
		ticketHTML += "<th class='header-cell-width'>"+'이름'+"</th>";
		ticketHTML += "<td class='ticket-cell-width'>"+name+"</td>";
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
		ticketHTML += "</table>";

		$(".ticket-container").append(ticketHTML);
	}

	function getTickets(pageNumber) {
		$.callAjax({
			url: "/api/ticketing/revokedTickets",
			method: "POST",
			data: {
				page: pageNumber,
				cancel: cancel
			},
			success: function(pagingTickets) {

			$(".ticket-container").empty();

			for (var i=0; i<pagingTickets.tickets.length; i++) {
				var ticket = pagingTickets.tickets[i];

				var reservedNumber = ticket.reservedNumber;
				var name = ticket.name;
				var reservedTime = ticket.reservedTime;
				var departureStation = ticket.departureStation;
				var arrivalStation = ticket.arrivalStation;

				addTicket(reservedNumber, name, reservedTime, departureStation, arrivalStation);
			}

			var totalCount = pagingTickets.totalCount;

			drawPaging(totalCount);
			}
		});

	function drawPaging(totalCount) {
		firstPage = parseInt((currentPage - 1) / pagingRange) * pagingRange + 1;
		lastPage = firstPage + pagingRange - 1;
		totalPages = parseInt(totalCount / itemsPerPage)
			+ (totalCount % itemsPerPage > 0 ? 1 : 0);

		$(".ticket-paging").empty();

		var pagingNumberHTML = "<div class='ticket-paging-number'>";
		pagingNumberHTML += "이전";
		pagingNumberHTML += "</div>";

		$(".ticket-paging").append(pagingNumberHTML);

		for (var i=firstPage; i<=lastPage; i++) {
			if (i > totalPages) {
				break;
			}

			pagingNumberHTML = "<div class='ticket-paging-number";

			if (i == currentPage) {
				pagingNumberHTML += "current-page";
			}

			pagingNumberHTML += "'>";
			pagingNumberHTML += i;
			pagingNumberHTML += "</div>";

			$(".ticket-paging").append(pagingNumberHTML);
		}

		pagingNumberHTML = "<div class='ticket-paging-number'>";
		pagingNumberHTML += "다음";
		pagingNumberHTML += "</div>";

		$(".ticket-paging").append(pagingNumberHTML);

		$(".ticket-paging-number").on("click", function() {
			var pageText = $(this).text();
			var pageNumber = 0;

			if (pageText == "이전") {
				pageNumber = firstPage - 1;

				if (pageNumber < 1) {
					return;
				}
			}
			else if (pageText == "다음") {
				pageNumber = lastPage + 1;

				if (pageNumber > totalPages) {
					return;
				}
			}
			else {
				pageNumber = Number(pageText);
			}

			currentPage = pageNumber;

			getTickets(pageNumber);
		});
	}

	var itemsPerPage = 1;
	var pagingRange = 5;
	var currentPage = 1;
	var firstPage;
	var lastPage;
	var totalPages;

	getTickets(currentPage);
	addConfirm();
});