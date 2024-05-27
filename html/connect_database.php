<?php

$host = "localhost";
$username = "root";
$password = "Younes22";
$database = "YNSGaming";

$conn = mysqli_connect($host,$userame,$password,$database);

if (!$conn) {
	die("Fout bij het verbinden met de database: " . mysqli_connect_error());
} else {
	echo "Verbinding met de database is gelukt! ";
}

mysqli_close($conn);

include 'connect_database.php';
?>
