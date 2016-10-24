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

	<div class="password-dialog">
		<div class="form-group">
			<label for="txtPasswordConfirm" class="input-required">비밀번호 확인</label>
			<input type="password" class="form-control" id="txtPasswordConfirm" placeholder="비밀번호 확인">
		</div>
		<div class="bottom-buttons">
			<button class="btnConfirm btn btn-success">확인</button>
			<button class="btnCancel btn btn-default">취소</button>
		</div>
	</div>

	<div id="divMemberInfo" class="hidden-view">
		<div class="form-group">
			<label>이름</label>
			<div id="infoName"></div>
		</div>
		<div class="form-group">
			<label>아이디</label>
			<div id="infoMemberId"></div>
		</div>
		<div class="form-group">
			<label>비밀번호</label>
			<div id="infoPassword"></div>
		</div>
		<div class="form-group">
			<label>이메일</label>
			<div id="infoEmail"></div>
		</div>
		<div class="form-group">
			<label>전화번호</label>
			<div id="infoPhoneNumber"></div>
		</div>
		<div class="bottom-buttons">
			<button class="btnInfoUpdate btn btn-success">회원정보수정</button>
			<button class="btnCancel btn btn-default">취소</button>
			<button class="btnInfoDelete btn btn-danger">회원탈퇴</button>
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