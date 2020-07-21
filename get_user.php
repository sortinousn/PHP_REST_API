<?php
include 'dbconf.php';

header("Access-Control-Allow-Origin: *"); //Added for CORs
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");

$query = mysqli_query($con, "SELECT * FROM users") or die(mysqli_error($con));

//Returning a JSON response to index.js fetch call for success or error.
$data = array();

while ($row = mysqli_fetch_assoc($query)) {
    $data[] = $row;
}
echo json_encode($data);