$(function(){
	$(".applyBtn").on("click", function() {
		var name = $("#txtName").val().trim();
		var memberId = $("#txtMemberId").val().trim();
		var password = $("#txtPassword").val().trim();
		var email = $("#txtEmail").val().trim();
		var phoneNumber = $("#txtPhoneNumber").val().trim();

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

			alert(name + "님 환영합니다.");
		}).fail(function() {
			alert("사용자가 폭주하여 잠시 후 사용해주세요.");
		});
	});
});