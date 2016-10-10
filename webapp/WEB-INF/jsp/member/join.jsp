<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>join</title>
</head>
<body>

	<table border="1px">
		<tr>
			<th>type</th>
			<th>value</th>
		</tr>
		<tr>
			<td>name</td>
			<td>
				<input type="text" id="txtName">
			</td>
		</tr>
		<tr>
			<td>memberId</td>
			<td>
				<input type="text" id="txtMemberId">
			</td>
		</tr>
		<tr>
			<td>password</td>
			<td>
				<input type="password" id="txtPassword">
			</td>
		</tr>
		<tr>
			<td>email</td>
			<td>
				<input type="text" id="txtEmail">
			</td>
		</tr>
		<tr>
			<td>phoneNumber</td>
			<td>
				<input type="text" id="txtPhoneNumber">
			</td>
		</tr>
	</table>
	<button class="applyBtn" type="button">보내기</button>



<script src="/static/plugins/jquery/jquery-3.1.0.min.js"></script>
<script src="/static/plugins/bootstrap/js/bootstrap.min.js"></script>
<script src="/static/js/join.js"></script>
</body>
</html>