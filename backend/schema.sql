CREATE DATABASE IF NOT EXISTS beyond_syllabus;
USE beyond_syllabus;

CREATE TABLE IF NOT EXISTS attendees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    level VARCHAR(50) NOT NULL,
    interest ENUM('Tech', 'Web3', 'Both') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
