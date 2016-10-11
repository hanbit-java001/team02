<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>종합 교통 예매</title>
<link rel="stylesheet" href="/static/plugins/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/static/plugins/font-awesome/css/font-awesome.min.css">
<link rel="stylesheet" href="/static/plugins/material/iconfont/material-icons.css">
<link rel="stylesheet" href="/static/css/main.css" />
</head>
<body>
	<div class="main-container">

		<div class="main-top">
			<div class="main-top-body">
				<div class="main-name">종합 교통 예매</div>
				<div class="main-menu">
					<ul>
						<li id="mainHome">홈</li>
						<li id="mainLogin">로그인</li>
						<li id="mainService">서비스 이용하기</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="main-content">
			<div class="main-content-body">
				<h2>편리한 교통 예매 서비스</h2>
				<p>목적지로 가는 경로를 추천해주고, 교통편을 예약할 수 있습니다.</p><br>
				<button id="btnJoin" class="btn btn-primary">지금 가입하기</button>
			</div>
		</div>

		<div class="main-bottom">2016, Hanbit Team 02</div>

		<div class="login-dialog" >
			<div class="form-group">
				<label for="txtId" class="input-required">아이디</label>
				<input type="text" class="form-control" id="txtId" placeholder="아이디">
			</div>
			<div class="form-group">
				<label for="txtPassword" class="input-required">비밀번호</label>
				<input type="password" class="form-control" id="txtPassword" placeholder="비밀번호">
			</div>
			<div class="bottom-buttons">
				<button class="btnLogin btn btn-success">로그인</button>
				<button class="btnLoginCancel btn btn-default">취소</button>
			</div>
		</div>

	</div>
<script src="/static/plugins/jquery/jquery-3.1.0.min.js"></script>
<script src="/static/plugins/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>