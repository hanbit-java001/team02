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
//	function drawCityList() {
//		$.ajax({
//			url:"/api/get/citiescode",
//			method:"POST",
//			data:{
//				operatorName : "getCtyCodeList",
//				searchingCountNum : 999,
//				pageNum : 1
//			}
//		}).done(function(result){
//			citiesTable(result);
//		});
//	}
	
	function citiesTable(obj) {
		var totalCities = obj.body.items.length;
		var itemsPerRow = 4;
		citiesTableHTML = "";
		citiesTableHTML += '<div class="citiesTable">';
		for(var i=0; i<totalCities;i++){
			citiesTableHTML += '<div class="cityCell" cellNum="';
			citiesTableHTML += i;
			citiesTableHTML += '" cityCode ="';
			citiesTableHTML += obj.body.items[i].citycode;
			citiesTableHTML += '">';
			citiesTableHTML += obj.body.items[i].cityname
			citiesTableHTML += '</div>';
		}
		citiesTableHTML += '</div>';
		$("#trainStationsTable").append(citiesTableHTML);
////////////////////////////////////////////////////////////////////
/*도시 이름을 클릭하는 이벤트에 #trainStationsTable 내부를 전부 지우고 다시 쓰는 함수*/
		$(".cityCell").click(function() {
			var cityCode = $(this).attr("citycode");
			$("#trainStationsTable").empty();
			drawCloseIcon();
			drawTableHeader($("#trainStationsTable"));
			drawStationList(cityCode);
			$(".closeIcon").click(closeAction);
		})
///////////////////////////////////////////////////////////////////
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
		$("#trainStationsTable").attr("tgt", tofrom);
	}
///////////////////////////////////////////////////////////////////////
/*예매하기 눌러서 나온 list 아이콘 클릭 이벤트에 도시 이름 띄우는 함수*/
	$(".list-departure, .list-arrival").click(function() {
		$(".reserveForm").hide();
		$("#trainStationsTable").fadeIn();
		drawCloseIcon();
		drawTableHeader($(this))
		drawCityList();
		var tofrom = $("#trainStationsTable").attr("tgt");
		$(".closeIcon").click(closeAction);
	});
	
	$().on("",function(){
		$.ajax({
			url : "/api/ticket/reserve",
			method : "POST",
			data : {
				departure : departure,
				arrival : arrival
			}
		})
	})
///////////////////////////////////////////////////////////////////////


//cityCell에서 citycode를 받아서 공공데이터 서버로 보내서 station list를 가져오는 코드
	var stations = [];	
	function drawStationList(cityCode) {
		$.ajax({
			url:"/api/get/TrainSttnList",
			method:"POST",
			data:{
				operatorName : "getCtyAcctoTrainSttnList",
				cityCode : cityCode,
				numOfRows : 999
			}
		}).done(function(result) {
			stations = result;
			stationsTable(stations, 1);
		});
	}

	

//station list를 paging하여 화면에 보여주는 코드.
	function stationsTable(obj, page) {
		var totalCities = obj.body.items.length;
		
		var stationsTableHTML = "";
		stationsTableHTML += '<div class="stationsTable">';
		
		var itemsPerPage = 16;
		var startIndex = (page - 1) * itemsPerPage;
		var endIndex = Math.min(page * itemsPerPage, totalCities);
		
		for(var i=startIndex; i<endIndex;i++){
			stationsTableHTML += '<div class="stationCell" cellNum="';
			stationsTableHTML += i;
			stationsTableHTML += '" nodeid ="';
			stationsTableHTML += obj.body.items[i].nodeid;
			stationsTableHTML += '">';
			stationsTableHTML += obj.body.items[i].nodename;
			stationsTableHTML += '</div>';
		}
		stationsTableHTML += '</div>';
		
		$("#trainStationsTable").append(stationsTableHTML);
		
		//stationCell을 클릭하여 해당 station 이름을 form에 넣는 코드
		$(".stationCell").on("click", function() {
			var target = $("#trainStationsTable").attr("tgt");
			
			if (target == "departure") {
				$(".form-departure").val($(this).text())
			}
			else if (target == "arrival") {
				$(".form-arrival").val($(this).text())
			}
			closeAction()
		});
		
		drawPaging(obj);
		var totalStationCount = obj.body.items.length;
	}
//////////////////////////////////////////////////////////////////////
	
	
	function drawPaging(obj) {
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
//////////////////////////////////////////////////////////////////////
/*page number 클릭하는 이벤트에 station 다 지우고 새로 그려주는 함수*/
		$(".pageNumber.selectable").on("click", function() {
			var page = Number($(this).text());
			$("#trainStationsTable").empty();
			drawCloseIcon();
			drawTableHeader($(".list-departure, .list-arrival"));
			stationsTable(stations, page);
		});
//////////////////////////////////////////////////////////////////////
	}
});