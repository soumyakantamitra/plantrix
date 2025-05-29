from flask import Flask, request, jsonify
from weather import get_weather_data
from gemini import query_gemini
from utils import build_prompt
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Server is running"


@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.json
    location = data.get("location")
    space = data.get("space")
    sunlight = data.get("sunlight")
    goals = data.get("goals")

    try:
        climate = get_weather_data(location)
        prompt = build_prompt(location, space, sunlight, goals, climate)
        response = query_gemini(prompt)
        return jsonify({"success": True, "recommendation": response})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
