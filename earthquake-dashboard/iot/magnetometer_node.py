import serial
from common import send_data_http

ser = serial.Serial('/dev/ttyUSB0', 9600)
SERVER_URL = "http://<SERVER_IP>:5000/submit_sensor"

while True:
    line = ser.readline().decode('utf-8').strip()
    if "Z:" in line:
        z = int(line.split()[-1])
        payload = {
            "magnet_z": z,
            "radon": 0,
            "thermal": 0,
            "lat": 25.6, "lng": 85.1, "substation": "S1"
        }
        send_data_http(SERVER_URL, payload)
