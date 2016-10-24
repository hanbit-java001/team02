$(function() {
	$(".btnConfirm").on("click", function() {
		passwordCheck();
	});

	$(".password-dialog").keyup(function(event) {
		if (event.keyCode != 13) {
			return;
		}
		passwordCheck();
	});

	function hidePasswordDialog() {
		$(".password-dialog").hide();
	}

	function showDivMemberInfo() {
		$("#divMemberInfo").show();
	}

	function passwordCheck() {
		var password = $("#txtPasswordConfirm").val();

		if (password.trim() == "") {
			alert("비밀번호를 입력하세요.");
			$("#txtPasswordConfirm").val("");
			$("#txtPasswordConfirm").focus();
			return;
		}

		$.ajax({
			url : "/api/member/",
			method : "POST",
			data : {
				password : password
			},
			success : function(result) {

				$("#txtPasswordConfirm").val("");

				hidePasswordDialog();
				showDivMemberInfo();
			},
			error : function() {
				alert("비밀번호를 잘못 입력하셨습니다. 다시 입력해주세요.");
			}
		});
	}

	$(".btnCancel").on("click", function() {
		location.href = "/home/main";
	});
});