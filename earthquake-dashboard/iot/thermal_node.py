import random
from common import send_data_http
import time

SERVER_URL = "http://<SERVER_IP>:5000/submit_sensor"

while True:
    payload = {
        "magnet_z": 0,
        "radon": 0,
        "thermal": random.uniform(600, 1100),
        "lat": 25.6, "lng": 85.1, "substation": "S2"
    }
    send_data_http(SERVER_URL, payload)
    time.sleep(10)
