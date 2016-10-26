$(function(){
	
	function getCityCodes() {
		$.ajax({
			url:"/api/get/citycode",
			method:"POST",
			data:{
				operatorName : "getCtyCodeList",
				searchingCountNum : 999,
				pageNum : 1
			}
		}).done(function(result){
			addStation(result);
		});
	}

	var cityCodesDemo = {
			"header" : {
				"resultCode" : "00",
				"resultMsg" : "NORMAL SERVICE."
			},
			"body" : {
				"items" : [ {"citycode" : "11","cityname" : "서울특별시"}, 
				            {"citycode" : "21","cityname" : "부산광역시"}, 
				            {
					"citycode" : "22",
					"cityname" : "대구광역시"
				}, {
					"citycode" : "23",
					"cityname" : "인천광역시"
				}, {
					"citycode" : "24",
					"cityname" : "광주광역시"
				}, {
					"citycode" : "25",
					"cityname" : "대전광역시"
				}, {
					"citycode" : "26",
					"cityname" : "울산광역시"
				}, {
					"citycode" : "31",
					"cityname" : "경기도"
				}, {
					"citycode" : "32",
					"cityname" : "강원도"
				}, {
					"citycode" : "33",
					"cityname" : "충청북도"
				}, {
					"citycode" : "34",
					"cityname" : "충청남도"
				}, {
					"citycode" : "35",
					"cityname" : "전라북도"
				}, {
					"citycode" : "36",
					"cityname" : "전라남도"
				}, {
					"citycode" : "37",
					"cityname" : "경상북도"
				}, {
					"citycode" : "38",
					"cityname" : "경상남도"
				} ]
			}
		};

	function addStation(obj){
		var stationtableHTML = "";
		stationtableHTML += '<table class="table table-striped stationTable">';
		stationtableHTML += '<tr>';
		stationtableHTML += '	<th id="departureOrarrival" colspan="4"></th>';
		stationtableHTML += '</tr>';
		stationtableHTML += '<tr>';
		stationtableHTML += '<td>';
		stationtableHTML += obj.body.items[0].cityname;
		stationtableHTML += '</td>';
		stationtableHTML += '<td>';
		stationtableHTML += obj.body.items[1].cityname;
		stationtableHTML += '</td>';
		stationtableHTML += '<td>';
		stationtableHTML += obj.body.items[2].cityname;
		stationtableHTML += '</td>';
		stationtableHTML += '<td>';
		stationtableHTML += obj.body.items[3].cityname;
		stationtableHTML += '</td>';
		stationtableHTML += '</tr>';
		stationtableHTML += '</table>';
		
		
		$("#trainStationsTable").append(stationtableHTML);

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
	}

	
	$(".list-departure, .list-arrival").on("click", getCityCodes);
		
});