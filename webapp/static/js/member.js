$(function() {
	function addMember(name, memberId, password, email, phoneNumber) {
		var memberHTML = "";
		memberHTML += '<div class="member-info">';

		memberHTML += '<div class="form-group">';
		memberHTML += '<label for="txtName">'+'이름'+'</label>';
		memberHTML += '<input type="text" class="form-control" id="txtName" disabled value='+name+'>';
		memberHTML += '</div>';
		memberHTML += '<div class="form-group">';
		memberHTML += '<label for="txtMemberId">'+'아이디'+'</label>';
		memberHTML += '<input type="text" class="form-control" id="txtMemberId" disabled value='+memberId+'>';
		memberHTML += '</div>';
		memberHTML += '<div class="form-group">';
		memberHTML += '<label for="txtPassword">'+'비밀번호'+'</label>';
		memberHTML += '<input type="password" class="form-control" id="txtPassword" value='+password+'>';
		memberHTML += '</div>';
		memberHTML += '<div class="form-group">';
		memberHTML += '<label for="txtPasswordConfirm">'+'비밀번호 확인'+'</label>';
		memberHTML += '<input type="password" class="form-control" id="txtPasswordConfirm" value='+password+'>';
		memberHTML += '</div>';
		memberHTML += '<div class="form-group">';
		memberHTML += '<label for="txtEmail">'+'이메일'+'</label>';
		memberHTML += '<input type="text" class="form-control" id="txtEmail" value='+email+'>';
		memberHTML += '</div>';
		memberHTML += '<div class="form-group">';
		memberHTML += '<label for="txtPhoneNumber">'+'전화번호'+'</label>';
		memberHTML += '<input type="text" class="form-control" id="txtPhoneNumber" value='+phoneNumber+'>';
		memberHTML += '</div>';
		memberHTML += '<div class="bottom-buttons">';
		memberHTML += '<button class="btnUpdate btn btn-success">수정하기</button>';
		memberHTML += '<button class="btnCancel btn btn-default">취소</button>';
		memberHTML += '<button class="btnDelete btn btn-danger">탈퇴하기</button>';
		memberHTML += '</div>';
		memberHTML += '</div>';

		$(".member-container").append(memberHTML);

		$(".btnUpdate").on("click", function() {
			var password = $("#txtPassword").val();
			var passwordConfirm = $("#txtPasswordConfirm").val();
			var email = $("#txtEmail").val();
			var phoneNumber = $("#txtPhoneNumber").val();

			if (password.trim() == "") {
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
					password: password,
					email: email,
					phoneNumber: phoneNumber
				};

			callAjax({
				url: "/api/member/editMember",
				method : "POST",
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				data: JSON.stringify(data),
				success : function() {
					alert("회원정보가 수정되었습니다.");
					location.reload();
				}
			});
		});

		$(".btnCancel").on("click", function() {
			location.href = "/ticketing/ticketing";
		});

		$(".btnDelete").on("click", function() {
			var check = confirm("정말 탈퇴하시겠습니까?");
		    if (check == true) {
		        callAjax({
					url: "/api/member/revokeMember",
					method: "DELETE",
					success: function(result) {
						if (result.countRemoved > 0) {
							alert("탈퇴가 완료되었습니다. 그동안 이용해주셔서 감사합니다.");
							location.href = "/security/logout";
							location.href = "/home/main";
							location.reload();
						}
					}
				});
		    } else {
		        location.reload();
		    }
		});
	}

	function getMember() {
		$.ajax({
			url: "/api/member/viewMember",
			method: "POST"
		}).done(function(memberInfo) {
			var member = memberInfo.info;

			var name = member.name;
			var memberId = member.memberId;
			var password = member.password;
			var email = member.email;
			var phoneNumber = member.phoneNumber;

			addMember(name, memberId, password, email, phoneNumber);
		}).fail(function() {
			$(".main-content").empty();
			alert("로그인이 필요합니다.");
			location.href = "/home/main";
		});
	}

	getMember();
});