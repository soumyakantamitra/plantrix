import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

# Load the Gemini API key
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=GEMINI_API_KEY)

# Use Gemini Pro model
model = genai.GenerativeModel("gemini-2.0-flash")

def query_gemini(prompt: str) -> str:
    try:
        response = model.generate_content(prompt)
        return response.text  # Returns the response as a plain string
    except Exception as e:
        raise Exception(f"Gemini error: {e}")
