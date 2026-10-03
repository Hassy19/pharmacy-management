<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:5173");

require_once "../../config/database.php";

try {
    $stmt = $pdo->query("
        SELECT
            id,
            name,
            description,
            created_at,
            updated_at
        FROM categories
        ORDER BY name ASC
    ");

    $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "success" => true,
        "data" => $categories
    ]);

} catch (PDOException $e) {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "Failed to fetch categories",
        "error" => $e->getMessage()
    ]);
}