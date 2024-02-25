from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

# Initializing flask app
app = Flask(__name__)
CORS(app)

# Define .env files location and variables for SMTP service
load_dotenv("server/.env.backend")

email_sender = os.getenv("EMAIL_SENDER")
email_password = os.getenv("EMAIL_PASSWORD")
email_recipient = os.getenv("EMAIL_RECIPIENT")

@app.route('/contact_email',  methods=["POST"])
def send_contact_email():
	email_data = request.get_json()	

	# Contact form data validation
	if email_data["email"] == "" and email_data["telephone"] == "":
		return jsonify({
			"success": False,
			"message": "datos de contacto no encontrados"
		})

	if email_data["message"] == False or email_data["message"] == "":
		return jsonify({
			"success": False,
			"message": "mensaje no encontrado"
		})
	
	if email_data["name"] == False or email_data["name"] == "":
		return jsonify({
			"success": False,
			"message": "nombre no encontrado"
		})


	# perform SMTP transaction
	smtp_client = smtplib.SMTP("smtp-mail.outlook.com", port=587)
	
	smtp_client.starttls()
	smtp_client.login(email_sender, email_password)
	
	email = get_email_message(email_data)
	smtp_client.sendmail(email_sender, email_recipient, email.as_string())

	smtp_client.quit()

	return jsonify({
		"success": True
	})

def get_email_message(email_data):
	# Write email information, render as HTML only known content
	email = MIMEMultipart("mixed")
	email["From"] = email_sender
	email["To"] = email_recipient
	email["Subject"] = email_data["subject"]

	html_part_1 = MIMEText("<b>Nombre: </b>", "html")
	html_part_2 = MIMEText("<br><br><b>Contacto: </b>", "html")
	html_part_3 = MIMEText("<br><br><b>Mensaje: </b><br><br>", "html")

	conctact_data = ", ".join(filter(None, [email_data["telephone"], email_data["email"]]))

	email.attach(html_part_1)
	email.attach(MIMEText(email_data["name"], "plain"))
	email.attach(html_part_2)
	email.attach(MIMEText(conctact_data, "plain"))
	email.attach(html_part_3)
	email.attach(MIMEText(email_data["message"], "plain"))	

	return email

# Run flask app
if __name__ == '__main__':
	app.run(debug=True)
