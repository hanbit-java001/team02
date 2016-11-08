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
	function emptyLoginDialog() {
		$(".login-dialog").empty();
	}
	function showLoginDialog() {
		var loginDialogHTML ="";
		loginDialogHTML +='<div class="form-group">';
		loginDialogHTML +='<label for="txtId" class="input-required">아이디</label>';
		loginDialogHTML +='<input type="text" class="form-control" id="txtId" placeholder="아이디">';
		loginDialogHTML +='</div>';
		loginDialogHTML +='<div class="form-group">';
		loginDialogHTML +='<label for="txtPassword" class="input-required">비밀번호</label>';
		loginDialogHTML +='<input type="password" class="form-control" id="txtPassword" placeholder="비밀번호">';
		loginDialogHTML +='</div>';
		loginDialogHTML +='<div class="bottom-buttons">';
		loginDialogHTML +='<button class="btnLogin btn btn-success">로그인</button>';
		loginDialogHTML +='<button class="btnLoginCancel btn btn-default">취소</button>';
		loginDialogHTML +='</div>';

		$(".login-dialog").append(loginDialogHTML);

		$(".btnLoginCancel").on("click", function() {
			$("#txtId").val("");
			$("#txtPassword").val("");
			emptyLoginDialog();
			showMainContent();
		});
	}

	$(".main-menu ul li").on("click", function() {
		var mainId = $(this).attr("id");

		if (mainId == "mainHome") {
			location.href = "/home/main";
		} else if (mainId == "mainService") {
			location.href = "/ticketing/ticketing";
		} else if (mainId == "mainLogin") {
			if($(".login-dialog").text() == ""){
			hideMainContent();
			showLoginDialog();
			} else{

			}
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

				$("#txtMemberId").val("");
				$("#txtPassword").val("");

				showMenu(true);

				location.href = "/";

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
			$("#mainService").hide();
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
				$("#mainAdmin").hide();
				showMenu(false);
			} else {
				$("#mainAdmin").hide();
				$("#mainService").show();
				showMenu(true);
			}
		}
	});
});