<?php

	// example use from browser
	// http://localhost/companydirectory/libs/php/getAll.php
	
	ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	include("config.php");

	header('Content-Type: application/json; charset=UTF-8');

	$conn = new mysqli($cd_host, $cd_user, $cd_password, $cd_dbname, $cd_port, $cd_socket);

	if (mysqli_connect_errno()) {
		
		$output['status']['code'] = "300";
		$output['status']['name'] = "failure";
		$output['status']['description'] = "database unavailable";
		$output['data'] = [];

		echo "Failed to connect to MySQL: " . $conn -> connect_error;

		mysqli_close($conn);

		echo json_encode($output);

		exit;

	}	

	$query = 'SELECT p.lastName, p.firstName, p.jobTitle, p.email, d.name as department, l.name as location FROM personnel p LEFT JOIN department d ON (d.id = p.departmentID) LEFT JOIN location l ON (l.id = d.locationID) WHERE p.lastName LIKE "%' . $_REQUEST['search'] . '%" OR p.firstName LIKE "%' . $_REQUEST['search'] . '%" ORDER BY p.lastName, p.firstName, d.name, l.name';

	$result = $conn->query($query);
	
	if (!$result) {

		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "query failed";	
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output); 

		exit;

	}
   
   	$data = [];

	while ($row = mysqli_fetch_assoc($result)) {

		array_push($data, $row);

	}

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['data'] = $data;
	
	mysqli_close($conn);

	echo json_encode($output); 

?>