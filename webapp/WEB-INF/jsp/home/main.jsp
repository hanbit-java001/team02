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
<link rel="stylesheet" href="/static/css/common.css" />
</head>
<body>
	<div class="team02-body">
		<div class="team2-header">
			<div class="col-lg-1 col-md-2 col-sm-1"></div>
			<div class="team02-header-content col-lg-10 col-md-8 col-sm-10 col-xs-12">
				<div class="main-top-body">
					<div class="main-name">종합 교통 예매	</div>
					<div class="main-menu">
						<i class="material-icons menu-icon">menu</i>
						<ul class="main-menus">
							<li id="mainHome">홈</li>
							<li id="mainLogin">로그인</li>
							<li id="mainService">서비스 이용하기</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-lg-1 col-md-2 col-sm-1"></div>
		</div>
		<div>
			<div class="col-lg-4 col-md-3 col-sm-2"></div>
				<div class="main-content col-lg-4 col-md-6 col-sm-8">
					<h2>편리한 교통 예매 서비스</h2><br><br>
					<p>목적지로 가는 경로를 추천해주고,<br> 교통편을 예약할 수 있습니다.</p><br>
					<button id="btnJoin" class="btn btn-primary">지금 가입하기</button>
				</div>
				<div class="login-dialog col-lg-4 col-md-6 col-sm-8">
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
				<div class="col-lg-4 col-md-4 col-sm-4"></div>
			</div>
		</div>

	</div>
		<div class="team02-footer">2016, Hanbit Team 02</div>
<script src="/static/plugins/jquery/jquery-3.1.0.min.js"></script>
<script src="/static/plugins/bootstrap/js/bootstrap.min.js"></script>
<script src="/static/js/main.js"></script>
</body>
</html>