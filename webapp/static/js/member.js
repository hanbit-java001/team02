$(function() {
	function addMember(name, memberId, email, phoneNumber) {
		var memberHTML = "";
		memberHTML += "<div class='member-info'>";

		memberHTML += "<div class='member-name member-info-center'>";
		memberHTML += name;
		memberHTML += "</div>";
		memberHTML += "<div class='member-memberId member-info-center'>";
		memberHTML += memberId;
		memberHTML += "</div>";
		memberHTML += "<div class='member-email member-info-center'>";
		memberHTML += email;
		memberHTML += "</div>";
		memberHTML += "<div class='member-phoneNumber member-info-center'>";
		memberHTML += phoneNumber;
		memberHTML += "</div>";

		memberHTML += "</div>";

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
		});
	}

	getMember();

	$(".btnUpdate").on("click", function() {
		alert("");
	});

	$(".btnCancel").on("click", function() {
		location.href = "/ticketing/ticketing";
	});

	$(".btnDelete").on("click", function() {
		var check = confirm("정말 탈퇴하시겠습니까?");
	    if (check == true) {
	        callAjax({
				url: "/api/member/" + memberId,
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