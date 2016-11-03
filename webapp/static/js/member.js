$(function() {
	function addMember(name, memberId, password, email, phoneNumber) {
		var memberHTML = "";
		memberHTML += "<div class='member-info'>";

		memberHTML += "<tr>";
		memberHTML += "<th class='member-name member-info-center'>"
		memberHTML += "이름";
		memberHTML += "</th>"
		memberHTML += "<td class='member-name member-info-center'>"
		memberHTML += name;
		memberHTML += "</td>"
		memberHTML += "</tr>";

		memberHTML += "<tr>";
		memberHTML += "<th class='member-memberId member-info-center'>"
		memberHTML += "아이디";
		memberHTML += "</th>"
		memberHTML += "<td class='member-memberId member-info-center'>"
		memberHTML += memberId;
		memberHTML += "</td>"
		memberHTML += "</tr>";

		memberHTML += "<tr>";
		memberHTML += "<th class='member-password member-info-center'>"
		memberHTML += "비밀번호";
		memberHTML += "</th>"
		memberHTML += "<td class='member-password member-info-center'>"
		memberHTML += password;
		memberHTML += "</td>"
		memberHTML += "</tr>";

		memberHTML += "<tr>";
		memberHTML += "<th class='member-email member-info-center'>"
		memberHTML += "이메일";
		memberHTML += "</th>"
		memberHTML += "<td class='member-email member-info-center'>"
		memberHTML += email;
		memberHTML += "</td>"
		memberHTML += "</tr>";

		memberHTML += "<tr>";
		memberHTML += "<th class='member-phoneNumber member-info-center'>"
		memberHTML += "전화번호";
		memberHTML += "</th>"
		memberHTML += "<td class='member-phoneNumber member-info-center'>"
		memberHTML += phoneNumber;
		memberHTML += "</td>"
		memberHTML += "</tr>";

		memberHTML += "</div>";

		$(".member-container").append(memberHTML);
	}

	function getMember(memberId) {
		$.ajax({
			url: "/api/member/viewMember",
			method: "POST",
			data: {
				memberId: memberId
			}
		}).done(function(member) {
			$(".member-container").empty();

			var member = member;

			var name = member.name;
			var memberId = member.memberId;
			var email = member.password;
			var email = member.email;
			var email = member.phoneNumber;

			addMember(name, memberId, password, email, phoneNumber);
		});
	}

	getMember(memberId);
});