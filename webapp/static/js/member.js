$(function() {
	function addMember(name, memberId, email, phoneNumber) {
		var memberHTML = "";
		memberHTML += "<table class='table table-bordered'>";
		memberHTML += "<tr>";
		memberHTML += "<th class='member-info-center'>"+'이름'+"</th>";
		memberHTML += "<td>"+name+"</td>";
		memberHTML += "</tr>";
		memberHTML += "<tr>";
		memberHTML += "<th class='member-info-center'>"+'아이디'+"</th>";
		memberHTML += "<td>"+memberId+"</td>";
		memberHTML += "</tr>";
		memberHTML += "<tr>";
		memberHTML += "<th class='member-info-center'>"+'이메일'+"</th>";
		memberHTML += "<td>"+email+"</td>";
		memberHTML += "</tr>";
		memberHTML += "<tr>";
		memberHTML += "<th class='member-info-center'>"+'전화번호'+"</th>";
		memberHTML += "<td>"+phoneNumber+"</td>";
		memberHTML += "</tr>";
		memberHTML += "</table>";

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
			alert("로그인이 필요합니다.");
			location.href = "/home/main";
		});
	}

	getMember();

	$(".btnUpdate").on("click", function() {
		alert("구현 중입니다.");
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
						alert("탈퇴가 완료되었습니다. 안녕");
					}
				}
			});
	    } else {
	        location.reload();
	    }
	});
});