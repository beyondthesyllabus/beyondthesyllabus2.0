<?php
// backend/api/register.php
require_once 'config.php';

// Dynamically load composer autoloader if it exists (highly recommended)
if (file_exists(__DIR__ . '/../vendor/autoload.php')) {
    require_once __DIR__ . '/../vendor/autoload.php';
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Utility function to respond
function respond($status, $message, $extra = []) {
    echo json_encode(array_merge(['status' => $status, 'message' => $message], $extra));
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond('error', 'Invalid request method');
}

$input = json_decode(file_get_contents('php://input'), true);

// Clean and Validate properties
$fullName = trim($input['fullName'] ?? '');
$email = trim($input['email'] ?? '');
$department = trim($input['department'] ?? '');
$level = trim($input['level'] ?? '');
$interest = trim($input['interest'] ?? '');

if (empty($fullName) || empty($email) || empty($department) || empty($level) || empty($interest)) {
    respond('error', 'All fields are required.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond('error', 'Invalid email format.');
}

if (!in_array($interest, ['Tech', 'Web3', 'Both'])) {
    respond('error', 'Invalid area of interest.');
}

// 1. Database Store (Optional Enhancement)
try {
    $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prevent SQL injection natively via prepared statements
    $stmt = $pdo->prepare("INSERT INTO attendees (full_name, email, department, level, interest) VALUES (?, ?, ?, ?, ?)");
    $stmt->execute([$fullName, $email, $department, $level, $interest]);

} catch (PDOException $e) {
    // Return connection errors (Ensure local DB is configured)
    respond('error', 'Database Error: ' . $e->getMessage());
}

// 2. PHPMailer Setup
if (!class_exists('PHPMailer\PHPMailer\PHPMailer')) {
    respond('error', 'PHPMailer is missing! Make sure to run `composer install` in the backend folder.');
}

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = SMTP_PORT;

    // Bypass XAMPP's local SSL verification bug that causes 10060 connection drops
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    $mail->setFrom(SMTP_USER, 'Beyond Syllabus System');
    $mail->addAddress(ORGANIZER_EMAIL, 'Organizer');

    $mail->isHTML(false); 
    $mail->Subject = 'New Registration - Beyond the Syllabus 2026';
    
    $dateStr = date('Y-m-d H:i:s');
    
    // Using Heredoc for accurate formatting matching the required blueprint
    $body = <<<EOT
New Registration - Beyond the Syllabus 2026

Name: $fullName  
Email: $email  
Department: $department  
Level: $level  
Interest: $interest  

Date: $dateStr
EOT;

    $mail->Body = $body;
    $mail->send();

    respond('success', 'Registration successful');

} catch (Exception $e) {
    respond('error', "Registration saved, but email failed: {$mail->ErrorInfo}");
}
