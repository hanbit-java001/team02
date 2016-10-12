$(function(){
	$(".mainLogin").on("click", function(){
		hideMainContent();
		showLoginDialog();
	})
	
	function hideMainContent(){
		$(".main-content").hide();
	}
	
	function showLoginDialog(){
		$(".login-dialog").show();
	}
});