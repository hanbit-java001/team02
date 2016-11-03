$(function() {

	$(".btnReserve").on("click", function(){
		$(".team2-back-button").show();
	});

	$(".team2-back-button").on("click", function(){
		$(".team2-back-button").hide();
	});


	$(".btnReserve").on("click", function() {
		hideBtnsOfTicketing();
		showReserveContainer();
	});

	$(".team2-back-button").on("click", function() {
		hideReserveContainer();
		showBtnsOfTicketing();
	});

	$(".btnMemberInfo").on("click", function() {
		location.href = "/member/info";
	});

	$(".btnMemberList").on("click", function() {
		location.href = "/member/list";
	});

	function hideBtnsOfTicketing() {
		$(".ticketingContainer").hide();
	}

	function showReserveContainer() {
		$(".reserveContainer").show();
	}

	function hideReserveContainer() {
		$(".reserveContainer").hide();
	}

	function showBtnsOfTicketing() {
		$(".ticketingContainer").show();
	}

	function showMemberMenu(loggedIn) {
		if (loggedIn) {
			$(".btnMemberInfo").show();
		}
	}

	callAjax({
		url: "/api/security/isLoggedIn",
		method: "GET",
		success: function(result) {
			if (result.memberId == "admin") {
				$(".btnReserve").hide();
				$(".btnListing").hide();
				$(".btnListingOfCanceled").hide();
				$(".btnMemberList").show();
				showMemberMenu(true);
			} else if (result.name == "") {
				showMemberMenu(false);
			} else {
				showMemberMenu(true);
			}
		}
	});
});