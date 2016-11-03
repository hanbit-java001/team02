$(function(){

	function drawCityList() {
		$.ajax({
			url:"/api/get/citycode",
			method:"POST",
			data:{
				operatorName : "getCtyCodeList",
				searchingCountNum : 999,
				pageNum : 1
			}
		}).done(function(result){
			citiesTable(result);
		});
	}
	
	function citiesTable(obj) {
		var totalCities = obj.body.items.length;
		var itemsPerRow = 4;
		citiesTableHTML = "";
		citiesTableHTML += '<div class="table table-striped citiesTable">';
		for(var i=0; i<16;i++){
			citiesTableHTML += '<div class="cityCell" cellNum="';
			citiesTableHTML += i;
			citiesTableHTML += '">';
			console.log(obj.body.items[i].cityname)
			citiesTableHTML += '</div>';
		}
		citiesTableHTML += '</div>';
		
	
		$("#trainStationsTable").append(citiesTableHTML);
	}
	
	function drawStationList() {
		$.ajax({
			url:"/api/get/TrainSttnList",
			method:"POST",
			data:{
				operatorName : "getCtyAcctoTrainSttnList",
				cityCode : cityCode,
				numOfRows : 999
			}
		}).done(function(result) {
			
		});
	}	

	function drawCloseIcon() {
		var closeIconHTML ="";
		closeIconHTML += '<div id="closeIcon">';
		closeIconHTML += '<i class="material-icons closeIcon">close</i>';
		closeIconHTML += '</div>';
		$("#trainStationsTable").append(closeIconHTML);
	}
	function closeAction(){
		$("#trainStationsTable").empty().hide()
		$(".reserveForm").show()
		cityTableHTML="";
	}
	function drawTableHeader(caller) {
		var ListTableHeadHTML ="";
		ListTableHeadHTML += '<div id="departureOrarrival" colspan="4"/>';
		$("#trainStationsTable").append(ListTableHeadHTML);
		//표 머리에 출발역 도착역 쓰는 코드
		var tofrom = caller.attr("tgt");
		if (tofrom == "departure"){
			$("#departureOrarrival").text($(".arr").text());
		} else if (tofrom == "arrival") {
			$("#departureOrarrival").text($(".dep").text());
		}
	}
	
	$(".list-departure, .list-arrival").click(function() {
		$(".reserveForm").hide();
		$("#trainStationsTable").fadeIn();
		drawCloseIcon();
		drawTableHeader($(this))
		drawCityList();

		$(".closeIcon").click(closeAction);
	});
});