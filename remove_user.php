<?php

include 'dbconf.php';

header("Access-Control-Allow-Origin: *"); //Added for CORs
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

$data = file_get_contents('php://input');

$user = json_decode($data);

$id = mysqli_real_escape_string($con, $user->id);

$query = mysqli_query($con, "DELETE FROM users WHERE id = '$id'") or die(mysqli_error($con));

//Returning a JSON response to index.js fetch call for success or error.

if ($query) {
    $response = array(
        'status' => true,
        'message' => 'success',
    );
} else {
    $response = array(
        'status' => false,
        'message' => 'error',
    );
}

echo json_encode($response);