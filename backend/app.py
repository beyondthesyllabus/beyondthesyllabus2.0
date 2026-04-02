# backend/app.py
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
from smtplib import SMTP
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)
CORS(app)

# Database Configuration (Local XAMPP MySQL)
DB_CONFIG = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'beyond_syllabus'
}

# Email Configuration
ORGANIZER_EMAIL = "beyondthesyllabus001@gmail.com"
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_USER = "beyondthesyllabus001@gmail.com"
SMTP_PASS = "ptpcuirlocxytbbi"

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
        # First connect without database selection to ensure it exists
        conn = mysql.connector.connect(
            host=DB_CONFIG['host'],
            user=DB_CONFIG['user'],
            password=DB_CONFIG['password']
        )
        cursor = conn.cursor()
        
        # 1. Ensure the database exists
        cursor.execute(f"CREATE DATABASE IF NOT EXISTS {DB_CONFIG['database']}")
        cursor.execute(f"USE {DB_CONFIG['database']}")
        
        # 2. Ensure the table exists
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS attendees (
                id INT AUTO_INCREMENT PRIMARY KEY,
                full_name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                department VARCHAR(255) NOT NULL,
                level VARCHAR(50) NOT NULL,
                interest ENUM('Tech', 'Web3', 'Both') NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)

        # 3. Insert data
        query = "INSERT INTO attendees (full_name, email, department, level, interest) VALUES (%s, %s, %s, %s, %s)"
        cursor.execute(query, (full_name, email, department, level, interest))
        conn.commit()
        cursor.close()
        conn.close()

        # Try to send email (May fail on Free PythonAnywhere)
        try:
            msg = MIMEMultipart('alternative')
            msg['From'] = f"Beyond Syllabus System <{SMTP_USER}>"
            msg['To'] = email
            msg['Cc'] = ORGANIZER_EMAIL
            msg['Subject'] = "Registration Confirmation - Beyond the Syllabus 2026"
            
            html_body = f"""
            <html>
              <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                  <h2 style="color: #6d28d9;">Registration Successful!</h2>
                  <p>Hello <strong>{full_name}</strong>,</p>
                  <p>Thank you for registering for <strong>Beyond the Syllabus 2026</strong>! Your application is officially confirmed.</p>
                  
                  <div style="background-color: #f9f7ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #4c1d95;">Your Details:</h3>
                    <ul style="list-style: none; padding: 0;">
                      <li><strong>Department:</strong> {department}</li>
                      <li><strong>Level:</strong> {level}</li>
                      <li><strong>Interest:</strong> {interest}</li>
                    </ul>
                  </div>
                  
                  <p>We look forward to seeing you at the event. Stay tuned for more updates!</p>
                  <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                  <p style="font-size: 12px; color: #777;">Best regards,<br>The Beyond Syllabus Team</p>
                </div>
              </body>
            </html>
            """
            msg.attach(MIMEText(html_body, 'html'))

            server = SMTP(SMTP_SERVER, SMTP_PORT)
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
            # Send to both the 'To' and 'Cc' recipients
            recipients = [email, ORGANIZER_EMAIL]
            server.sendmail(SMTP_USER, recipients, msg.as_string())
            server.quit()
            
            return jsonify({"status": "success", "message": "Registration successful! A confirmation email has been sent to your inbox."}), 201

        except Exception as e:
            # We return success as the data is in the DB, but inform about the email failure
            print(f"Email failed: {e}")
            return jsonify({
                "status": "success", 
                "message": "Registration saved, but we couldn't send the confirmation email. Please check your Spam folder or SMTP settings.",
                "email_error": str(e)
            }), 201

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
