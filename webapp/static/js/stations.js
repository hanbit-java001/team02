$(function(){
	var cityCode = 0;
	function makeCityTables(caller) {
		$.ajax({
			url:"/api/get/citycode",
			method:"POST",
			data:{
				operatorName : "getCtyCodeList",
				searchingCountNum : 999,
				pageNum : 1
			}
		}).done(function(result){
			addCities(result, caller);
		});	
	}
	
	function makeStationTable(caller) {
		$.ajax({
			url:"/api/get/TrainSttnList",
			method:"POST",
			data:{
				operatorName : "getCtyAcctoTrainSttnList",
				cityCode : 11,
				numOfRows : 999,
			}
		}).done(function(result){
			addStations(result, caller);
		})
	}

	function addStations(obj, caller) {
		var stationTableHTML = "";
		stationTableHTML += '<div id="closeIcon">';
		stationTableHTML += '<i class="material-icons closeIcon">close</i>';
		stationTableHTML += '</div>';
		stationTableHTML += '<table class="table table-striped stationTable">';
		stationTableHTML += '<tr>';
		stationTableHTML += '	<th id="departureOrarrival" colspan="4"></th>';
		stationTableHTML += '</tr>';
		
		for(var j = 0; j<obj.body.items.length/4; j++){
			stationTableHTML += '<tr>';
			for(var i = j*4; i<(j*4)+4; i++){
				if(i < obj.body.items.length){
					stationTableHTML += '<td nodeid ="'+ obj.body.items[i].nodeid +'">';
					stationTableHTML += obj.body.items[i].nodename;
				}else if(i >= obj.body.items.length){
					stationTableHTML += '';
				}
				stationTableHTML += '</td>';
			}
			stationTableHTML += '</tr>';
		}
		stationTableHTML += '</table>';
		
		$("#trainStationsTable").append(stationTableHTML);
	
		//표 머리에 출발역 도착역 쓰는 코드
		var tofrom = caller.attr("tgt");
		if (tofrom == "departure"){
			$("#departureOrarrival").text($(".arr").text());
		} else if (tofrom == "arrival") {
			$("#departureOrarrival").text($(".dep").text());
		}
		$("#trainStationsTable").attr("tgt", tofrom);
		
		$("tr td").mouseenter(function(){
			$(this).css("color", "blue")
		})
		$("tr td").mouseleave(function(){
			$(this).css("color", "black")
		})
	}


	function addCities(obj, caller){
		var cityTableHTML = "";
		cityTableHTML += '<div id="closeIcon">';
		cityTableHTML += '<i class="material-icons closeIcon">close</i>';
		cityTableHTML += '</div>';
		cityTableHTML += '<table class="table table-striped stationTable">';
		cityTableHTML += '<tr>';
		cityTableHTML += '	<th id="departureOrarrival" colspan="4"></th>';
		cityTableHTML += '</tr>';
		
		for(var j = 0; j<obj.body.items.length/4; j++){
			cityTableHTML += '<tr>';
			for(var i = j*4; i<(j*4)+4; i++){
				if(i < obj.body.items.length){
					cityTableHTML += '<td cityCode ="'+ obj.body.items[i].citycode +'">';
					cityTableHTML += obj.body.items[i].cityname;
				}else if(i >= obj.body.items.length){
					cityTableHTML += '';
				}
				cityTableHTML += '</td>';
			}
			cityTableHTML += '</tr>';
		}
		cityTableHTML += '</table>';
		
		
		$("#trainStationsTable").append(cityTableHTML);
		
		//표 머리에 출발역 도착역 쓰는 코드
		var tofrom = caller.attr("tgt");
		
		if (tofrom == "departure"){
			$("#departureOrarrival").text($(".arr").text());
		} else if (tofrom == "arrival") {
			$("#departureOrarrival").text($(".dep").text());
		}
		
		$("#trainStationsTable").attr("tgt", tofrom);

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
			
			cityCode = $("[citycode]").val();
			makeStationTable($(this));

			//$("#trainStationsTable").hide()
			//$(".reserveForm").show()
			$("#closeIcon").detach()
			$(".stationTable").detach()	
			
			
		
			$(".closeIcon").click(function(){
				$("#trainStationsTable").hide()
				$(".reserveForm").show()
				$(".stationTable").detach()
			});
		})
	}

	$(".list-departure, .list-arrival").on("click", function() {
		$(".reserveForm").hide();
		
		makeCityTables($(this));
		
		$("#trainStationsTable").fadeIn();
		
	});
		
});