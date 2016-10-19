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
		<div class="train-ticketing-name">���� ����</div>
			<div id="btnGroupMain">
				<i class="material-icons team2-menu-button">menu</i>
				<i class="material-icons team2-back-button">chevron_left</i>
				<i class="material-icons team2-next-button">chevron_right</i>
			</div>
		</header>

		<nav class="ticketingContainer container-fluid">
			<div class="col-lg-4 col-md-4 col-sm-4"></div>
			<div class="btnGroupTicketing col-lg-4 col-md-4 col-sm-4">
				<p>
					<button type="button" class="btn btnReserve btn-block">�����ϱ�</button>
				</p>
				<p>
					<button type="button" class="btn btnListing btn-block">���Ÿ��</button>
				</p>
				<p>
					<button type="button" class="btn btnListingOfCanceled btn-block">��Ҹ��</button>
				</p>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-4"></div>
		</nav>

		<section class="reserveContainer">
			<div class="col-lg-4 col-md-4 col-sm-4"></div>
			<div class="reserveForm col-lg-4 col-md-4 col-sm-4">
					<label for="txtName" class="input-required arr">��߿�</label>
				<div class="form-group input-group">
					<input type="context" class="form-control form-departure" id="txtName" placeholder="��߿�">
					<i tgt="departure" class="material-icons list-departure input-group-addon">list</i>
				</div>
					<label for="txtName" class="input-required dep">������</label>
				<div class="form-group input-group">
					<input type="context" class="form-control form-arrival" id="txtName" placeholder="������">
					<i tgt="arrival" class="material-icons list-arrival input-group-addon">list</i>
				</div>
			</div>
			<div id="trainStationsTable" class="col-lg-4 col-md-4 col-sm-4 jumbotron">
				<table class="table table-striped">
					<tr>
						<th id="departureOrarrival" colspan="5"></th>
					</tr>
					<tr>
						<td>����</td>
						<td>����</td>
						<td>�뱸</td>
						<td>�λ�</td>
						<td>����</td>
					</tr>
					<tr>
						<td>���</td>
						<td>��õ</td>
						<td>���</td>
						<td>������</td>
						<td>��õ</td>
					</tr>
				</table>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-4"></div>
		</section>
	</div>
	<footer class="team02-footer">

	</footer>

	<script src="/static/plugins/jquery/jquery-3.1.0.min.js"></script>
	<script src="/static/plugins/bootstrap/js/bootstrap.min.js"></script>
	<script src="/static/js/ticketing.js"></script>
	<script src="/static/js/common.js"></script>
</body>
</html>