<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<link rel="stylesheet"
	href="/static/plugins/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet"
	href="/static/plugins/font-awesome/css/font-awesome.min.css">
<link rel="stylesheet"
	href="/static/plugins/material/iconfont/material-icons.css">
<link rel="stylesheet" href="/static/css/scheduler.css" />
<style>
.team2-header {
	width: 100%;
	height: 48px;
	background-color:#383838;
	z-index: 1000;
}

.ticketingContainer{
	position: relative;
}

.btnGroupTicketing{
	margin-top: 100px;
}
.team2-top-button{
	color: white;
}
</style>

<title>Ticketing page</title>
</head>
<body>

	<header class="team2-header">
	<div id="btnGroupMain">
		<div id="btnMenu" class="team2-top-button">
			<i class="material-icons hanbit-abs-center">menu</i>
		</div>
	</div>
	</header>

	<nav class="ticketingContainer container-fluid">
		<div class="col-lg-4"></div>
		<div class="btnGroupTicketing col-lg-4 ">
			<p>
				<button type="button" class="btn btnReserve btn-block">예매하기</button>
			</p>
			<p>
				<button type="button" class="btn btnListing btn-block">예매목록</button>
			</p>
			<p>
				<button type="button" class="btn btnListingOfCanceled btn-block">취소목록</button>
			</p>
		</div>
		<div class="col-lg-4"></div>
	</nav>

	<script src="/static/plugins/jquery/jquery-3.1.0.min.js"></script>
	<script src="/static/plugins/bootstrap/js/bootstrap.min.js"></script>
	<script src="/static/js/scheduler.js"></script>
</body>
</html>