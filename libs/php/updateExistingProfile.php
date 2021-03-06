<?php

	ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	session_start();

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

	$query = 'UPDATE personnel SET firstName = "' . $_REQUEST["firstName"] . '", lastName = "' . $_REQUEST["lastName"] . '", jobTitle = "' . $_REQUEST["jobTitle"] . '", email = "' . $_REQUEST["email"] . '", departmentID = "' . $_REQUEST["departmentID"] . '", photo = "./images/profiles/' . $_REQUEST["id"] . '.' . $_SESSION['ext'] . '"  WHERE id = ' . $_REQUEST['id'];

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

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['data'] = [];
	
	mysqli_close($conn);

	echo json_encode($output); 

?>