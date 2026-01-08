import requests
import json

def send_data_http(server_url, payload):
    try:
        res = requests.post(server_url, json=payload)
        print("Sent:", payload, "Response:", res.text)
    except Exception as e:
        print("Error sending data:", e)
