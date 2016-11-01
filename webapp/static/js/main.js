$(function() {
	$(".menu-icon").on("click", function() {
		$(".main-menus").toggle();
	});

	function hideMainContent() {
		$(".main-content").hide();
	}
	function showMainContent() {
		$(".main-content").show();
	}
	function hideLoginDialog() {
		$(".login-dialog").hide();
	}
	function showLoginDialog() {
		$(".login-dialog").show();
	}

	$(".main-menu ul li").on("click", function() {
		var mainId = $(this).attr("id");

		if (mainId == "mainHome") {
			location.href = "/home/main";
		} else if (mainId == "mainService") {
			location.href = "/ticketing/ticketing";
		} else if (mainId == "mainLogin") {
			hideMainContent();
			showLoginDialog();
		} else if (mainId == "mainLogout") {
			location.href = "/security/logout";
		} else if (mainId == "mainAdmin") {
			location.href = "/ticketing/ticketing";
		}
	});

	$("#btnJoin").on("click", function() {
		location.href = "/member/join";
	});

	$(".btnLogin").on("click", function() {
		doLogin();
	});

	$(".login-dialog").keyup(function(event) {
		if (event.keyCode != 13) {
			return;
		}
		doLogin();
	});

	$(".btnLoginCancel").on("click", function() {
		$("#txtId").val("");
		$("#txtPassword").val("");
		hideLoginDialog();
		showMainContent();
	});

	function doLogin() {
		var memberId = $("#txtId").val();
		var password = $("#txtPassword").val();

		if (memberId.trim() == "") {
			alert("아이디를 입력하세요.");
			$("#txtId").val("");
			$("#txtId").focus();
			return;
		} else if (password.trim() == "") {
			alert("비밀번호를 입력하세요.");
			$("#txtPassword").val("");
			$("#txtPassword").focus();
			return;
		}

		$.ajax({
			url: "/api/security/login",
			method: "POST",
			data: {
				memberId: memberId,
				password: password
			},
			success: function(result) {
				var name = result.name;
				var memberId = result.memberId;
				alert(name + "님 안녕하세요.");

				$("#txtId").val("");
				$("#txtPassword").val("");

				hideloginDialog();
				location.reload();
				showMenu(true);
			},
			error: function() {
				alert("아이디 혹은 비밀번호를 잘못 입력하셨습니다. 다시 입력해주세요.");
			}
		});
	}

	function showMenu(loggedIn) {
		if (loggedIn) {
			$("#mainLogout").show();
			$("#mainLogin").hide();
		} else {
			$("#mainLogin").show();
			$("#mainLogout").hide();
		}
	}

	callAjax({
		url: "/api/security/isLoggedIn",
		method: "GET",
		success: function(result) {
			if (result.memberId == "admin") {
				$("#mainService").hide();
				$("#mainAdmin").show();
				showMenu(true);
			} else if (result.name == "") {
				showMenu(false);
			} else {
				showMenu(true);
			}
		}
	});
});