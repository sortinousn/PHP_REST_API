<?php
include 'dbconf.php';

header("Access-Control-Allow-Origin: *"); //Added for CORs
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

$data = file_get_contents('php://input');

$user = json_decode($data);

// Hashing the password for security purposes.
$password = password_hash($user->password, PASSWORD_DEFAULT);

$firstname = mysqli_real_escape_string($con, $user->firstname);
$lastname = mysqli_real_escape_string($con, $user->lastname);
$username = mysqli_real_escape_string($con, $user->username);
$email = mysqli_real_escape_string($con, $user->email);
$password = mysqli_real_escape_string($con, $password);

$query = mysqli_query($con, "INSERT INTO users (firstname,lastname,username,email,password) VALUES ('$firstname','$lastname','$username','$email','$password')") or die(mysqli_error($con));

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