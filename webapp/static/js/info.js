$(function() {
	function getMember(callback) {
		callAjax({
			url: "/api/member/viewMember"
			method: "GET",
			success: function(result) {
				callback(result);
			}
		});
	}

	function removeMember() {
		var check = confirm("정말 탈퇴하시겠습니까?");
	    if (check == true) {
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

	function showDetailMember(member) {
		$("#member-info-detail").show();

		var data = {
			name: member.name,
			memberId: member.memberId,
			password: member.password,
			email: member.email,
			phoneNumber: member.phoneNumber
		}

		$("#detailName").html(data.name);
		$("#detailMemberId").html(data.memberId);
		$("#detailPassword").html(data.password);
		$("#detailPasswordConfirm").html(data.password);
		$("#detailEmail").html(data.email);
		$("#detailPhoneNumber").html(data.phoneNumber);
		$(".btnUpdate").attr("memberId", data.memberId);
    	$(".btnDelete").attr("memberId", data.memberId);
	}

	function showUpdateMember(member) {
		$("#member-info-update").show();

		$("#txtName").val(member.name);
		$("#txtMemberId").html(member.memberId);
		$("#txtPassword").val(member.password);
		$("#txtPasswordConfirm").val(member.password);
		$("#txtEmail").val(member.email);
		$("#txtPhoneNumber").html(member.phoneNumber);
	}

	$(".btnUpdate").on("click", function() {
		var memberId = $(this).attr("memberId");

		getMember(function(member) {
			showUpdateMember(member);
			updateMember();
    	});
	});

	$(".btnCancel").on("click", function() {
		location.href = "/ticketing/ticketing";
	});

	$(".btnDelete").on("click", function() {
		var memberId = $(this).attr("memberId");
		showDetailMember(member);
		removeMember();
	});
});