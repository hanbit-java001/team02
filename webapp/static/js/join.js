$(function(){
	$(".btnJoin").on("click", function() {
		var name = $("#txtName").val();
		var memberId = $("#txtMemberId").val();
		var password = $("#txtPassword").val();
		var email = $("#txtEmail").val();
		var phoneNumber = $("#txtPhoneNumber").val();

		if (name.trim() == "") {
			alert("이름을 입력하세요.");
			$("#txtName").val("");
			$("#txtName").focus();
			return;
		} else if (memberId.trim() == "") {
			alert("아이디를 입력하세요.");
			$("#txtMemberId").val("");
			$("#txtMemberId").focus();
			return;
		} else if (password.trim() == "") {
			alert("비밀번호를 입력하세요.");
			$("#txtPassword").val("");
			$("#txtPassword").focus();
			return;
		} else if (email.trim() == "") {
			alert("이메일을 입력하세요.");
			$("#txtEmail").val("");
			$("#txtEmail").focus();
			return;
		} else if (phoneNumber.trim() == "") {
			alert("핸드폰 번호를 입력하세요.");
			$("#txtPhoneNumber").val("");
			$("#txtPhoneNumber").focus();
			return;
		}

		var data = {
			name: name,
			memberId: memberId,
			password: password,
			email: email,
			phoneNumber: phoneNumber
		};

		$.ajax({
			url: "/api/member/join",
			method: "POST",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			data: JSON.stringify(data)
		}).done(function(result) {
			var name = result.name;

			alert(name + "님의 가입을 환영합니다.");
		}).fail(function() {
			alert("잠시 후 이용해주세요.");
		});
	});

	$(".btnJoinCancel").on("click", function() {
		location.href = "/home/main";
	});
});