$(function(){
	
	var cityListObj;
	var stationListObj;
	
	
	function makeTables(caller) {
		$.ajax({
			url:"/api/get/citycode",
			method:"POST",
			data:{
				operatorName : "getCtyCodeList",
				searchingCountNum : 999,
				pageNum : 1
			}
		}).done(function(result){
			cityListObj = result;
			addCities(result, caller);
		});	
	}
	
	function makeStationTable(caller, cityCode) {
		$.ajax({
			url:"/api/get/TrainSttnList",
			method:"POST",
			data:{
				operatorName : "getCtyAcctoTrainSttnList",
				cityCode : cityCode,
				numOfRows : 999,
			}
		}).done(function(result){
			stationListObj = result;
			addStations(result, caller);
		})
	}
	

	var stationTableHTML = "";
	var cityTableHTML = "";
	
	function addCloseIcon() {
		var closeIconHTML ="";
		closeIconHTML += '<div id="closeIcon">';
		closeIconHTML += '<i class="material-icons closeIcon">close</i>';
		closeIconHTML += '</div>';
		$("#trainStationsTable").append(closeIconHTML);
	}
	
	function addListTableHead(caller) {
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
	
	function addListCitiesTable(obj) {
		var listCitiesTableHTML = "";
		listCitiesTableHTML += '<table class="table table-striped cltiesList">';
		for(var j = 0; j<obj.body.items.length/4; j++){
			listCitiesTableHTML += '<tr>';
			for(var i = j*4; i<(j*4)+4; i++){
				if(i < obj.body.items.length){
					listCitiesTableHTML += '<td cityCode ="'+ obj.body.items[i].citycode +'">';
					listCitiesTableHTML += obj.body.items[i].cityname;
				}else if(i >= obj.body.items.length){
					listCitiesTableHTML += '';
				}
				listCitiesTableHTML += '</td>';
			}
			listCitiesTableHTML += '</tr>';
		}
		listCitiesTableHTML += '</table>';
		
		$("#trainStationsTable").append(listCitiesTableHTML);
	}
	

	function addListStationsTable(stationListObj) {
		
		var totalItems = stationListObj.body.items.length;
		var itemsPerRow = 4;
		var page = 1;
		var startIndex = (page - 1) * itemsPerRow*4;
		var endIndex = Math.min(page * itemsPerRow, totalItems);
		console.log(stationListObj)
		console.log(totalItems)
		console.log(endIndex)

		var listStationsTableHTML = "";
		listStationsTableHTML += '<table class="table table-striped staionList">';
		for(var j = 0; j<totalItems/itemsPerRow; j++){
			listStationsTableHTML += '<tr>';
			for(var i = j*4; i<(j*4)+4; i++){
				if(i < stationListObj.body.items.length){
					listStationsTableHTML += '<td nodeid ="'+ stationListObj.body.items[i].nodeid +'">';
					listStationsTableHTML += stationListObj.body.items[i].nodename;
				}else if(i >= stationListObj.body.items.length){
					listStationsTableHTML += '';
				}
				listStationsTableHTML += '</td>';
			}
			listStationsTableHTML += '</tr>';
		}
		listStationsTableHTML += '</table>';
		$("#trainStationsTable").append(listStationsTableHTML);
	}

	function paging(obj) {
		var pagingHTML = "";
		pagingHTML += '<div id="pagingBar">';
		for (var i = 0; i<obj.body.items.length/4/4; i++){
			pagingHTML += '<div class="pageNumber';
			if (i != 0) {
				pagingHTML += ' selectable';
			}
			pagingHTML += '">'+(i+1)+'</div>'
		}
		pagingHTML += '</div>';
		
		$("#trainStationsTable").append(pagingHTML);
	}
	
	
	function addStations(obj, caller) {
		addCloseIcon()
		addListTableHead(caller)
		addListStationsTable(obj)
		paging(obj)

		$("tr td").mouseenter(function(){
			$(this).css({"color": "blue","font-weight":"bold"})				
		})
		$("tr td").mouseleave(function(){
			$(this).css({"color": "black","font-weight":"normal"})
		})
		$("tr td").click(function(){
			var target = $("#trainStationsTable").attr("tgt");
			
			if (target == "departure") {
				$(".form-departure").val($(this).text())
			}
			else if (target == "arrival") {
				$(".form-arrival").val($(this).text())
			}
			
			
			$("#trainStationsTable").empty().hide()
			$(".reserveForm").show()
			$("#closeIcon").detach()
			$(".stationTable").detach()
			$("#pagingBar").detach()
		});
		
		$(".pageNumber").click(function(){
			var selectedNumber = $(this).text();
			console.log(selectedNumber)
			if (selectedNumber != page){
				$("#trainStationsTable").empty();
			}else{
				
			}
		});
		
		
		$(".closeIcon").click(function(){
			$("#trainStationsTable").empty().hide()
			$(".reserveForm").show()
			$(".stationTable").detach()
			$("#pagingBar").detach()
		});
	}


	function addCities(obj, caller){
		addCloseIcon()
		addListTableHead(caller)
		addListCitiesTable(obj)

		$(".cltiesList tr td").mouseenter(function(){
			$(this).css({"color": "blue","font-weight":"bold"})
		})
		$(".cltiesList tr td").mouseleave(function(){
			$(this).css({"color": "black","font-weight":"normal"})
		})
		
		$(".cltiesList tr td").click(function(){
			var cityCode = $(this).attr("citycode");
			$("#trainStationsTable").attr("tgt");
			$("#trainStationsTable").empty()
			makeStationTable(caller, cityCode);
		});

		$(".closeIcon").click(function(){
			$("#trainStationsTable").empty().hide()
			$(".reserveForm").show()
			cityTableHTML="";
		});
	}

	$(".list-departure, .list-arrival").on("click", function(){
		$(".reserveForm").hide();
		
		makeTables($(this));
		
		$("#trainStationsTable").fadeIn();
	});
});