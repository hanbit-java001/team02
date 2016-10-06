<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>test</title>
</head>
<body>
	
	<table border="1px">
		<tr>
			<th>type</th>
			<th>value</th>
		</tr>
		<tr>
			<td>trainId</td>
			<td>
				<input type="text" id="txtTrainId">
			</td>
		</tr>
		<tr>
			<td>seatNumber</td>
			<td>
				<input type="text" id="txtSeatNumber">
			</td>
		</tr>
		<tr>
			<td>reservedNumber</td>
			<td>
				<input type="text" id="txtReservedNumber">
			</td>
		</tr>
		<tr>
			<td>name</td>
			<td>
				<input type="text" id="txtName">
			</td>
		</tr>
		<tr>
			<td>reservedTime</td>
			<td>
				<input type="text" id="txtReservedTime">
			</td>
		</tr>
		<tr>
			<td>cancel</td>
			<td>
				<input type="text" id="txtCancel">
			</td>
		</tr>
	</table>
	<button class="applyBtn" type="button">보내기</button>
	

	
<script src="/static/plugins/jquery/jquery-3.1.0.min.js"></script>
<script src="/static/plugins/bootstrap/js/bootstrap.min.js"></script>
<script src="/static/js/test.js"></script>
</body>
</html>