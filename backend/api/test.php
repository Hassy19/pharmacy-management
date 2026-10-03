<?php

header("Content-Type: application/json");

require_once "../config/database.php";

echo json_encode([
    "success" => true,
    "message" => "PHP backend is connected to MySQL!"
]);