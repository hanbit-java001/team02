<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
<link rel="stylesheet" href="/static/css/members.css" />
<link rel="stylesheet" href="/static/css/mainSub.css" />
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
							<li id="mainLogout">로그아웃</li>
							<li id="mainService">서비스 이용하기</li>
							<li id="mainAdmin" class="hidden-view">관리자 페이지</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-lg-1 col-md-2 col-sm-1"></div>
		</div>
		<div>
			<div class="col-lg-4 col-md-3 col-sm-2"></div>
				<div class="main-content col-lg-4 col-md-6 col-sm-8">
					<h3>회원목록</h3><br>
					<div class="member-header"></div>
					<div class="member-container"></div>
					<div class="member-paging"></div>
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

	<footer class="team02-footer">

	</footer>

<script src="/static/plugins/jquery/jquery-3.1.0.min.js"></script>
<script src="/static/plugins/bootstrap/js/bootstrap.min.js"></script>
<script src="/static/js/members.js"></script>
<script src="/static/js/common.js"></script>
<script src="/static/js/main.js"></script>
</body>
</html>