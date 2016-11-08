$(function() {
	$(".btnConfirm").on("click", function() {
		location.href = "/ticketing/ticketing";
	});

	function addHeader() {
		var memberHeaderHTML = "";

		memberHeaderHTML += "<table class='table table-responsive'>";
		memberHeaderHTML += "<thead>"
		memberHeaderHTML += "<tr>";
		memberHeaderHTML += "<th class='member-box-center'>"+'이름'+"</th>";
		memberHeaderHTML += "<th class='member-box-center'>"+'아이디'+"</th>";
		memberHeaderHTML += "<th class='member-box-center'>"+'이메일'+"</th>";
		memberHeaderHTML += "</tr>";
		memberHeaderHTML += "</thead>"

		$(".member-header").append(memberHeaderHTML);
	}

	function addConfirm() {
		var confirmHTML = "";

		confirmHTML += '<button class="btnConfirm btn btn-success">확인</button>';

		$(".member-confirm").html(confirmHTML);

		$(".btnConfirm").on("click", function() {
			location.href = "/ticketing/ticketing";
		});
	}

	function addMember(name, memberId, email) {

		var memberHTML = "";

		memberHTML += "<table class='table table-responsive'>";
		memberHTML += "<tbody>";
		memberHTML += "<tr>";
		memberHTML += "<td class='member-box-width'>"+name+"</td>";
		memberHTML += "<td class='member-box-width'>"+memberId+"</td>";
		memberHTML += "<td class='member-box-width'>"+email+"</td>";
		memberHTML += "</tr>";
		memberHTML += "</tbody>";
		memberHTML += "</table>";

		$(".member-container").append(memberHTML);
	}

	function getMembers(pageNumber) {
		$.ajax({
			url: "/api/member/viewMembers",
			method: "POST",
			data: {
				page: pageNumber
			}
		}).done(function(pagingMembers) {
			addHeader();
			$(".member-container").empty();

			for (var i=0; i<pagingMembers.members.length; i++) {
				var member = pagingMembers.members[i];

				var name = member.name;
				var memberId = member.memberId;
				var email = member.email;

				addMember(name, memberId, email);
			}

			var totalCount = pagingMembers.totalCount;

			drawPaging(totalCount);
		}).fail(function() {
			alert("로그인이 필요합니다.");
			location.href = "/home/main";
		});
	}

	function drawPaging(totalCount) {
		firstPage = parseInt((currentPage - 1) / pagingRange) * pagingRange + 1;
		lastPage = firstPage + pagingRange - 1;
		totalPages = parseInt(totalCount / itemsPerPage)
			+ (totalCount % itemsPerPage > 0 ? 1 : 0);

		$(".member-paging").empty();

		var pagingNumberHTML = "<div class='member-paging-number'>";
		pagingNumberHTML += "이전";
		pagingNumberHTML += "</div>";

		$(".member-paging").append(pagingNumberHTML);

		for (var i=firstPage; i<=lastPage; i++) {
			if (i > totalPages) {
				break;
			}

			pagingNumberHTML = "<div class='member-paging-number";

			if (i == currentPage) {
				pagingNumberHTML += "current-page";
			}

			pagingNumberHTML += "'>";
			pagingNumberHTML += i;
			pagingNumberHTML += "</div>";

			$(".member-paging").append(pagingNumberHTML);
		}

		pagingNumberHTML = "<div class='member-paging-number'>";
		pagingNumberHTML += "다음";
		pagingNumberHTML += "</div>";

		$(".member-paging").append(pagingNumberHTML);

		$(".member-paging-number").on("click", function() {
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

			getMembers(pageNumber);
		});
	}

	var itemsPerPage = 3;
	var pagingRange = 5;
	var currentPage = 1;
	var firstPage;
	var lastPage;
	var totalPages;

	getMembers(currentPage);
	addConfirm();
});