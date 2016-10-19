$(function() {
	
	$(".btnReserve").on("click", function(){
		$(".team2-back-button").show();
	});
	
	$(".team2-back-button").on("click", function(){
		$(".team2-back-button").hide();
	});
	
	
	$(".btnReserve").on("click", function() {
		hideBtnsOfTicketing();
		showReserveContainer();
	});
	
	$(".team2-back-button").on("click", function() {
		hideReserveContainer();
		showBtnsOfTicketing();
	});
	
	
	function hideBtnsOfTicketing() {
		$(".ticketingContainer").hide();
	}
	
	function showReserveContainer() {
		$(".reserveContainer").show();
	}
	
	function hideReserveContainer() {
		$(".reserveContainer").hide();
	}
	
	function showBtnsOfTicketing() {
		$(".ticketingContainer").show();
	}
	
	$(".list-departure, .list-arrival").on("click", function() {
		$(".reserveForm").hide();
		var tofrom = $(this).attr("tgt");
		
		if (tofrom == "departure"){
			$("#departureOrarrival").text($(".arr").text());
		} else if (tofrom == "arrival") {
			$("#departureOrarrival").text($(".dep").text());
		}
		$("#trainStationsTable").attr("tgt", tofrom);
		$("#trainStationsTable").show();
	});
	

	$("tr td").mouseenter(function(){
		$(this).css("color", "blue")
	})
	$("tr td").mouseleave(function(){
		$(this).css("color", "black")
	})
	$("tr td").click(function(){
		var target = $("#trainStationsTable").attr("tgt");
		
		if (target == "departure") {
			$(".form-departure").val($(this).text())
		}
		else if (target == "arrival") {
			$(".form-arrival").val($(this).text())
		}

		$("#trainStationsTable").hide()
		$(".reserveForm").show()
	})
	
});