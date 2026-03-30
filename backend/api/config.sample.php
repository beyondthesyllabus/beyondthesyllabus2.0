<?php
// backend/api/config.sample.php
// COPY THIS FILE TO config.php AND FILL IN YOUR REAL CREDENTIALS

// CORS Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database Credentials
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'beyond_syllabus');

// Mail Credentials (SMTP)
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 465);
define('SMTP_USER', 'your-email@gmail.com');
define('SMTP_PASS', 'your-16-letter-app-password');
define('ORGANIZER_EMAIL', 'your-email@gmail.com');
