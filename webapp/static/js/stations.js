$(function(){
	
	function getCityCodes(caller) {
		$.ajax({
			url:"/api/get/citycode",
			method:"POST",
			data:{
				operatorName : "getCtyCodeList",
				searchingCountNum : 999,
				pageNum : 1
			}
		}).done(function(result){
			addStation(result, caller);
		});	
	}



	function addStation(obj, caller){
		
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

			$("#trainStationsTable").hide()
			$(".reserveForm").show()
			$(".stationTable").detach()
		})
	}


	$(".list-departure, .list-arrival").on("click", function() {
		$(".reserveForm").hide();
		
		getCityCodes($(this));
		
		$("#trainStationsTable").show();
		
	});
		
});