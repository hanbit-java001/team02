$(function() {
	function getMember(memberId, callback) {
		callAjax({
			url: "/api/member/" + memberId,
			method: "GET",
			data: {
				memberId: memberId
			},
			success: function(result) {
				callback(result);
			}
		});
	}

	function removeMember(memberId) {
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

		$("#txtName").val(data.name);
		$("#txtMemberId").val(data.memberId);
		$("#txtPassword").val(data.password);
		$("#txtPasswordConfirm").val(data.password);
		$("#txtEmail").val(data.email);
		$("#txtPhoneNumber").val(data.phoneNumber);
	}

	function backwardView(member) {
    	viewHistory = viewHistory.slice(0, viewHistory.length-1);

    	var viewName = viewHistory[viewHistory.length-1].viewName;
    	var viewData = viewHistory[viewHistory.length-1].viewData;

    	if (schedule) {
    		viewData = {
    			member: member
    		};
    	}

    	changeView(viewName, viewData, true);
    }

    function changeView(viewName, data, isBack) {
    	if (!isBack) {
    		if (data && data.date) {
    			data.date = moment(data.date);
    		}

    		viewHistory.push({
    			viewName: viewName,
    			viewData: data
    		});
    	}

    	currentView = viewName;

    	var date;

		if (data && data.date) {
			date = data.date;

			currentMoment = moment(date);
	    	$("#calendar").fullCalendar("gotoDate", date);
		}

		hideAddSchedule();
		hideDetailSchedule();
		hideModifySchedule();

		if (viewName == "detail") {
    		var member = data.member;

    		showDetailMember(member);
    	}
    	else if (viewName == "modify") {
    		var member = data.member;

    		showModifyMember(member);
    	}
    }

	$(".btnUpdate").on("click", function() {
		var memberId = $(this).attr("memberId");

		getMember(function(member) {
			showDetailMember(member);
			updateMember();
    	});
	});

	$(".btnCancel").on("click", function() {
		location.href = "/ticketing/ticketing";
	});

	$(".btnDelete").on("click", function() {
		var memberId = $(this).attr("memberId");

		removeMember(memberId);
	});
});