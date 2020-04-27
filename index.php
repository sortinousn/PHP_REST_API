


<?php
include 'dbconf.php';
error_reporting(E_ALL);
ini_set("error_log", "/errorlog.log");
session_start();


if(isset($_POST["register"]))  
 {  
   
           $email = mysqli_real_escape_string($con, $_POST["email"]);  
           $password = mysqli_real_escape_string($con, $_POST["password"]);  
           $password = password_hash($password, PASSWORD_DEFAULT); 

           $query = mysqli_query($con,"INSERT INTO users (email, password) VALUES ('$email', '$password')") or die(mysqli_error($con));  
       

 }  




if (isset($_POST['login'])) {
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $password = mysqli_real_escape_string($con, $_POST['password']);

    $query = mysqli_query($con, "SELECT * FROM users 
    WHERE  email='$password' and password='$password'");
    $row = mysqli_fetch_array($query);



}
    //header('location:../pages/login.html');
