$(function(){
	$("#mainLogin").on("click", function(){
		hideMainContent();

		showLoginDialog();
	});

	function hideMainContent(){
		$(".main-content").hide();
	}
	function showMainContent(){
		$(".main-content").show();
	}
	function hideLoginDialog(){
		$(".login-dialog").hide();
	}
	function showLoginDialog(){
		$(".login-dialog").show();
	}

	$(".main-menu ul li").on("click", function() {
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


	$(".btnLogin").on("click", function() {
		doLogin();
	});

	$(".login-dialog").keyup(function(event) {
		if (event.keyCode != 13) {
			return;
		}
		doLogin();
	});

	$(".btnLoginCancel").on("click", function(){
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
		}
		else if (password.trim() == "") {
			alert("비밀번호를 입력하세요.");
			$("#txtPassword").val("");
			$("#txtPassword").focus();
			return;
		}

		var data = {
			memberId: memberId,
			password: password
		};

		$.ajax({
			url: "/api/security/login",
			method: "POST",
			contentType: "application/json; charset:utf-8",
			dataType: "json",
			data: JSON.stringify(data)
		}).done(function(result){
			var name = result.name;
			alert(name + "님 안녕하세요.");

			$("#txtId").val("");
			$("#txtPassword").val("");

			location.reload();
		}).fail(function() {
			alert("아이디 혹은 비밀번호를 잘못 입력하셨습니다. 다시 입력해주세요.");
		});
	}
});