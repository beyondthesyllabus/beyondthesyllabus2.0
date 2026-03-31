"""
Vercel Serverless Function — Registration Endpoint
POST /api/register
"""
from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
from smtplib import SMTP
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = Flask(__name__)
CORS(app)

# Database Configuration — uses environment variables set in Vercel dashboard
DB_CONFIG = {
    'host': os.environ.get('DB_HOST', 'localhost'),
    'user': os.environ.get('DB_USER', 'root'),
    'password': os.environ.get('DB_PASS', ''),
    'database': os.environ.get('DB_NAME', 'beyond_syllabus')
}

# Email Configuration
ORGANIZER_EMAIL = "beyondthesyllabus001@gmail.com"
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_USER = os.environ.get('SMTP_USER', 'beyondthesyllabus001@gmail.com')
SMTP_PASS = os.environ.get('SMTP_PASS', 'ptpcuirlocxytbbi')


@app.route('/api/register', methods=['POST'])
def register():
    try:
        data = request.get_json()

        # Validation
        full_name = data.get('fullName', '').strip()
        email = data.get('email', '').strip()
        department = data.get('department', '').strip()
        level = data.get('level', '').strip()
        interest = data.get('interest', '').strip()

        if not all([full_name, email, department, level, interest]):
            return jsonify({"status": "error", "message": "All fields are required"}), 400

        # Create Database Record
        conn = mysql.connector.connect(**DB_CONFIG)
        cursor = conn.cursor()
        query = "INSERT INTO attendees (full_name, email, department, level, interest) VALUES (%s, %s, %s, %s, %s)"
        cursor.execute(query, (full_name, email, department, level, interest))
        conn.commit()
        cursor.close()
        conn.close()

        # Try to send email notification
        try:
            msg = MIMEMultipart()
            msg['From'] = SMTP_USER
            msg['To'] = ORGANIZER_EMAIL
            msg['Subject'] = "New Registration - Beyond the Syllabus 2026"

            body = f"Name: {full_name}\nEmail: {email}\nDepartment: {department}\nLevel: {level}\nInterest: {interest}"
            msg.attach(MIMEText(body, 'plain'))

            server = SMTP(SMTP_SERVER, SMTP_PORT)
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
            server.send_message(msg)
            server.quit()
        except Exception as e:
            print(f"Email failed: {e}")

        return jsonify({"status": "success", "message": "Registration successful"}), 201

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500
