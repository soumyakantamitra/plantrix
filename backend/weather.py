import requests
import os
from dotenv import load_dotenv

load_dotenv()

VC_API_KEY = os.getenv("VISUAL_CROSSING_API_KEY")

def get_weather_data(location):
    url = f"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{location}?unitGroup=metric&key={VC_API_KEY}&contentType=json"

    response = requests.get(url)
    if response.status_code != 200:
        raise Exception("Error fetching weather data")

    data = response.json()
    # Average values from last 30 days
    days = data.get("days", [])[:30]

    avg_temp = sum(day["temp"] for day in days) / len(days)
    avg_humidity = sum(day["humidity"] for day in days) / len(days)
    avg_precip = sum(day["precip"] for day in days) / len(days)

    return {
        "temperature": round(avg_temp, 1),
        "humidity": round(avg_humidity, 1),
        "rainfall": round(avg_precip, 1)
    }
