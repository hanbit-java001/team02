$(function() {
	function addMember(name, memberId, email, phoneNumber) {
		var memberHTML = "";
		memberHTML += '<div class="member-update">';

		memberHTML += '<div class="form-group">';
		memberHTML += '<label for="txtName">'+'이름'+'</label>';
		memberHTML += '<input type="hidden" class="form-control" id="txtName" value='+password+'>';
		memberHTML += '</div>';
		memberHTML += '<div class="form-group">';
		memberHTML += '<label for="txtMemberId">'+'아이디'+'</label>';
		memberHTML += '<input type="hidden" class="form-control" id="txtMemberId" placeholder="아이디">';
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
		memberHTML += '<button class="btnUpdateConfirm btn btn-success">확인</button>';
		memberHTML += '</div>';
		memberHTML += '</div>';

		$(".member-container").append(memberHTML);
	}

	function getMember() {
		$.ajax({
			url: "/api/member/viewMember",
			method: "POST"
		}).done(function(memberInfo) {
			var member = memberInfo.info;

			var name = member.name;
			var memberId = member.memberId;
			var email = member.email;
			var phoneNumber = member.phoneNumber;

			addMember(name, memberId, email, phoneNumber);
		}).fail(function() {
			$(".main-content").empty();
			alert("로그인이 필요합니다.");
			location.href = "/home/main";
		});
	}

	getMember();

	function getUpdateInfo() {
		$.ajax({
			url: "/api/member/viewMember",
			method: "POST"
		}).done(function(memberInfo) {
			var member = memberInfo.info;

			var password = member.password;
			var email = member.email;
			var phoneNumber = member.phoneNumber;

			updateMember(password, email, phoneNumber);
		}).fail(function() {
			$(".main-content").empty();
			alert("로그인이 필요합니다.");
			location.href = "/home/main";
		});
	}

	getUpdateInfo();

	$(".btnUpdate").on("click", function() {
		updateMember();
	});

	$(".btnUpdateConfirm").on("click", function() {
		callAjax({
			url: "/api/member/editMember",
			method : "POST",
			success : function(result) {
				if (result.countEdited > 0) {
					alert("회원정보가 수정되었습니다.");
				}
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
					}
				}
			});
	    } else {
	        location.reload();
	    }
	});

	function updateMember(password, email, phoneNumber) {
		$(".member-container").empty();
		$(".bottom-buttons").empty();

		var updateHTML = "";
		updateHTML += '<div class="member-update">';

		updateHTML += '<div class="form-group">';
		updateHTML += '<label for="txtPassword">'+'비밀번호'+'</label>';
		updateHTML += '<input type="password" class="form-control" id="txtPassword" value='+password+'>';
		updateHTML += '</div>';
		updateHTML += '<div class="form-group">';
		updateHTML += '<label for="txtPasswordConfirm">'+'비밀번호 확인'+'</label>';
		updateHTML += '<input type="password" class="form-control" id="txtPasswordConfirm" value='+password+'>';
		updateHTML += '</div>';
		updateHTML += '<div class="form-group">';
		updateHTML += '<label for="txtEmail">'+'이메일'+'</label>';
		updateHTML += '<input type="text" class="form-control" id="txtEmail" value='+email+'>';
		updateHTML += '</div>';
		updateHTML += '<div class="form-group">';
		updateHTML += '<label for="txtPhoneNumber">'+'전화번호'+'</label>';
		updateHTML += '<input type="text" class="form-control" id="txtPhoneNumber" value='+phoneNumber+'>';
		updateHTML += '</div>';
		updateHTML += '<div class="bottom-buttons">';
		updateHTML += '<button class="btnUpdateConfirm btn btn-success">확인</button>';
		updateHTML += '</div>';
		updateHTML += '</div>';

		$(".member-container").append(updateHTML);
	}

});