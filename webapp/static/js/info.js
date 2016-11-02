$(function() {
	function showMemberInfo(member) {
		var name = $("#txtName").val();
		var memberId = $("#txtMemberId").val();
		var password = $("#txtPassword").val();
		var passwordConfirm = $("#txtPasswordConfirm").val();
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
		} else if (password != passwordConfirm) {
			alert("비밀번호를 동일하게 입력하세요.");
			$("#txtPasswordConfirm").val("");
			$("#txtPasswordConfirm").focus();
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
			name: member.name,
			memberId: member.memberId,
			password: member.password,
			email: member.email,
			phoneNumber: member.phoneNumber
		}

		$("#txtName").val(data.name);
		$("#txtMemberId").html(data.memberId);
		$("#txtPassword").val(data.password);
		$("#txtPasswordConfirm").val(data.password);
		$("#txtEmail").val(data.email);
		$("#txtPhoneNumber").html(data.phoneNumber);
	}

	function updateMember() {
		callAjax({
			url : "/api/member/editMember",
			method : "POST",
			success : function(result) {
				if (result.countEdited > 0) {
					alert("회원정보가 수정되었습니다.");
				}
			}
		});
	}

	function removeMember() {
		if (confirm("정말 탈퇴하시겠습니까?")) {
			callAjax({
				url: "/api/member/removeMember",
				method: "DELETE",
				success: function(result) {
					if (result.countRemoved > 0) {
						alert("탈퇴가 완료되었습니다. 안녕");
					}
				}
			});
		} else {
			location.reload();
		}
	}

	function getMember() {
		callAjax({
			url: "/api/member/viewMember"
			method: "GET",
			success: function(result) {
				showMemberInfo(result.member);
			}
		});
	}

	$(".btnInfoUpdate").on("click", function() {
		updateMember();
	});

	$(".btnCancel").on("click", function() {
		location.href = "/home/main";
	});

	$(".btnInfoDelete").on("click", function() {
		removeMember();
	});
});