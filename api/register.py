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
import ssl

app = Flask(__name__)
CORS(app)

# Database Configuration
DB_CONFIG = {
    'host': os.environ.get('TIDB_HOST', os.environ.get('DB_HOST', 'localhost')),
    'port': int(os.environ.get('TIDB_PORT', os.environ.get('DB_PORT', '4000'))),
    'user': os.environ.get('TIDB_USER', os.environ.get('DB_USER', 'root')),
    'password': os.environ.get('TIDB_PASSWORD', os.environ.get('DB_PASS', '')),
    'database': os.environ.get('DB_NAME', os.environ.get('TIDB_DATABASE', 'beyond_syllabus')),
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

        # 1. Connect first without selecting a database
        conn = mysql.connector.connect(
            host=DB_CONFIG['host'],
            port=DB_CONFIG['port'],
            user=DB_CONFIG['user'],
            password=DB_CONFIG['password']
        )
        cursor = conn.cursor()
        
        # 2. Force create and use the database
        target_db = DB_CONFIG['database']
        cursor.execute(f"CREATE DATABASE IF NOT EXISTS {target_db}")
        cursor.execute(f"USE {target_db}")
        
        # 3. Force create the table if missing
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS attendees (
                id INT AUTO_INCREMENT PRIMARY KEY,
                full_name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                department VARCHAR(255) NOT NULL,
                level VARCHAR(50) NOT NULL,
                interest VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        
        # 4. Migration: Ensure existing table columns are large enough for new values
        try:
            cursor.execute("ALTER TABLE attendees MODIFY COLUMN interest VARCHAR(255)")
        except Exception as alter_err:
            print(f"Migration (interest) skipped or failed: {alter_err}")

        try:
            cursor.execute("ALTER TABLE attendees MODIFY COLUMN level VARCHAR(50)")
        except Exception as alter_err:
            print(f"Migration (level) skipped or failed: {alter_err}")

        # 5. Insert data
        query = "INSERT INTO attendees (full_name, email, department, level, interest) VALUES (%s, %s, %s, %s, %s)"
        cursor.execute(query, (full_name, email, department, level, interest))
        conn.commit()
        cursor.close()
        conn.close()

        # Try to send email notification
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
            print(f"Email failed: {e}")
            return jsonify({
                "status": "success", 
                "message": "Registration saved, but we couldn't send the confirmation email. Please check your Spam folder or SMTP settings.",
                "email_error": str(e)
            }), 201

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500
