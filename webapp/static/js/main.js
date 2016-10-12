$(function(){
	$(".mainLogin").on("click", function(){
		hideMainContent();
		showLoginDialog();
	})

	function hideMainContent(){
		$(".main-content").hide();
	}

	function showLoginDialog(){
		$(".login-dialog").show();
	}

	$(.main-menu ul li).on("click", function() {
		var mainId = $(this).attr("id");
		if(mainId == "mainHome") {
			location.href = "/home/main";
		}
		else if (mainId == "mainService"){
			location.href = "/ticketing/ticketing";
		}
	});

	$("#btnJoin").on("click", function() {
		location.href = "/member/join";
	});
});