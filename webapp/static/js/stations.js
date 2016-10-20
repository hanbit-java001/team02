$(function(){
	function addStation(){
		var stationtableHTML = "";
		stationtableHTML += '<table class="table table-striped stationTable">';
		stationtableHTML += '<tr>';
		stationtableHTML += '	<th id="departureOrarrival" colspan="4"></th>';
		stationtableHTML += '</tr>';
		stationtableHTML += '<tr>';
		stationtableHTML += '	<td>Seoul</td>';
		stationtableHTML += '	<td>Deajeon</td>';
		stationtableHTML += '	<td>Deagu</td>';
		stationtableHTML += '	<td>Pusan</td>';
		stationtableHTML += '</tr>';
		stationtableHTML += '<tr>';
		stationtableHTML += '	<td>Ulsan</td>';
		stationtableHTML += '	<td>Incheon</td>';
		stationtableHTML += '	<td>Yongsan</td>';
		stationtableHTML += '	<td>Gwangju</td>';
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
	$(".list-departure, .list-arrival").on("click", addStation())
	
});