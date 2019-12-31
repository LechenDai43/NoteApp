<?php
$username = "nali";
$password = "noteapplogin";
$database = "NoteApp";
$mysqli = new mysqli('127.0.0.1', $username, $password, $database);
mysqli_set_charset($mysqli, "utf8");