<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
<meta name="msapplication-tap-highlight" content="no" />
<title>종합 교통 예매</title>
<link rel="stylesheet" href="/static/plugins/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/static/plugins/font-awesome/css/font-awesome.min.css">
<link rel="stylesheet" href="/static/plugins/material/iconfont/material-icons.css">
<link rel="stylesheet" href="/static/css/common.css" />
<link rel="stylesheet" href="/static/css/info.css" />
</head>
<body>
	<div class="team02-body">
		<header class="team2-header">

		</header>
	</div>

	<div class="member-info-detail" >
		<div class="form-group">
			<label for="txtName">이름</label>
			<input type="hidden" class="form-control" id="txtName" placeholder="이름">
		</div>
		<div class="form-group">
			<label for="txtMemberId" class="input-required">아이디</label>
			<input type="hidden" class="form-control" id="txtMemberId" placeholder="아이디">
		</div>
		<div class="form-group">
			<label for="txtPassword" class="input-required">비밀번호</label>
			<input type="password" class="form-control" id="txtPassword" placeholder="비밀번호">
		</div>
		<div class="form-group">
			<label for="txtPasswordConfirm" class="input-required">비밀번호 확인</label>
			<input type="password" class="form-control" id="txtPasswordConfirm" placeholder="비밀번호 확인">
		</div>
		<div class="form-group">
			<label for="txtEmail" class="input-required">이메일</label>
			<input type="text" class="form-control" id="txtEmail" placeholder="이메일">
		</div>
		<div class="form-group">
			<label for="txtPhoneNumber" class="input-required">전화번호</label>
			<input type="text" class="form-control" id="txtPhoneNumber" placeholder="전화번호">
		</div>
		<div class="bottom-buttons">
			<button class="btnUpdate btn btn-success">수정하기</button>
			<button class="btnCancel btn btn-default">취소</button>
			<button class="btnDelete btn btn-danger">탈퇴하기</button>
		</div>
	</div>

	<footer class="team02-footer">

	</footer>

<script src="/static/plugins/jquery/jquery-3.1.0.min.js"></script>
<script src="/static/plugins/bootstrap/js/bootstrap.min.js"></script>
<script src="/static/js/info.js"></script>
<script src="/static/js/common.js"></script>
</body>
</html>