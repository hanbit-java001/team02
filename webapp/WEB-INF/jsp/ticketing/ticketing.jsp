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
<link rel="stylesheet" href="/static/css/ticketing.css" />
<link rel="stylesheet" href="/static/css/common.css" />

<title>Ticketing page</title>
</head>
<body>
	<div class="team02-body">
		<header class="team2-header">
			<div id="btnGroupMain">
				<i class="material-icons team2-menu-button">menu</i>
			</div>
		</header>

		<nav class="ticketingContainer container-fluid">
			<div class="col-lg-4 col-md-4 col-sm-4"></div>
			<div class="btnGroupTicketing col-lg-4 col-md-4 col-sm-4">
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
			<div class="col-lg-4 col-md-4 col-sm-4"></div>
		</nav>

		<section class="reserveContainer">
			<div class="col-lg-4 col-md-4 col-sm-4"></div>
			<div class="col-lg-4 col-md-4 col-sm-4">
				<div class="form-group">
					<label for="txtName" class="input-required">출발역</label>
					<menu type="toolbar" id="txtName">

					</menu>
				</div>
				<div class="form-group">
					<label for="txtName" class="input-required">도착역</label>
					<menu type="context" class="form-control" id="txtName" placeholder="도착역">
				</div>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-4"></div>
		</section>
	</div>
	<footer class="team02-footer">
	
	</footer>

	<script src="/static/plugins/jquery/jquery-3.1.0.min.js"></script>
	<script src="/static/plugins/bootstrap/js/bootstrap.min.js"></script>
	<script src="/static/js/ticketing.js"></script>
</body>
</html>