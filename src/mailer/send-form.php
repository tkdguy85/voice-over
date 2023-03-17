<?php
// Sample idea for email submission

// Gather form data
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$message = $_POST['message'];

// Set email
$to = 'test@test.com';

mail($to);

?>