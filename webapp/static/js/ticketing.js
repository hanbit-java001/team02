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
});