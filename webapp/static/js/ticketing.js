$(function() {
	$(".btnReserve").on("click", function() {
		hideBtnsOfTicketing();
		showReserveContainer();
	});
	
	
	function hideBtnsOfTicketing() {
		$(".ticketingContainer").hide();
	}
	
	function showReserveContainer() {
		$(".reserveContainer").show();
	}
});