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

	function showDivMemberInfo(member) {
		$(".password-dialog").hide();
		$("#divMemberInfo").show();

		var data = {
			name : member.name,
			memberId : member.memberId,
			password : member.password,
			email : member.email,
			phoneNumber : member.phoneNumber
		}

		$("#infoName").val(data.name);
		$("#infoMemberId").html(data.memberId);
		$("#infoPassword").val(data.password);
		$("#infoEmail").val(data.email);
		$("#infoPhoneNumber").html(data.phoneNumber);
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
			url : "/api/member/viewMember",
			method : "POST",
			data : {
				password : password
			},
			success : function(result) {

				$("#txtPasswordConfirm").val("");

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

	$(".btnInfoUpdate").on("click", function() {
		showDivMemberInfo();

		callAjax({
			url : "/api/member/editMember",
			method : "POST",
			success : function(result) {
				if (result.countEdited > 0) {
					alert("회원정보가 수정되었습니다.");
				}
			}
		});
	});

	$(".btnInfoDelete").on("click", function() {
		callAjax({
			url : "/api/member/removeMember",
			method : "DELETE",
			success : function(result) {
				if (result.countRemoved > 0) {
					alert("회원탈퇴가 완료되었습니다.");
				}
			}
		});
	});
});