<?php
	
	ini_set('display_errors', 'On');
	error_reporting(E_ALL);

	session_start();


	$_SESSION['ext'] = end((explode(".", $_FILES['file']['name'])));

	if (!empty($_FILES)) {

		$ds = DIRECTORY_SEPARATOR;

		$tempFile = $_FILES['file']['tmp_name'];

		$targetPath = dirname( __FILE__ , 3) . $ds. 'images/profiles' . $ds;

		$cohortID = $_REQUEST['id'];

		$targetFile =  $targetPath . $cohortID . "." . $_SESSION['ext'];

		move_uploaded_file($tempFile,$targetFile);

		echo $ext;

	}

	var_export($ext);




?>