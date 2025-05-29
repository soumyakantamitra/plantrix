def build_prompt(location, space, sunlight, goals, climate):
    return f"""
I want to grow plants in an urban setting. Here are the details:

- Location: {location}
- Available space: {space}
- Sunlight: {sunlight}
- Goal: {goals}

Based on the following average climate data:
- Temperature: {climate['temperature']}°C
- Humidity: {climate['humidity']}%
- Rainfall: {climate['rainfall']} mm

Suggest 3 suitable edible crops.

For each crop, include the following fields:
- "suitability": A brief explanation of why this crop fits the environment.
- "planting_instructions": Clear, step-by-step instructions (as a string with newline separators, not a list) and avoid numbering the steps.
- "care_maintenance": Clear, step-by-step tips (as a string with newline separators, not a list) and avoid numbering the steps.
- "days_to_harvest": Estimated time until harvest.

Return the result as a valid **JSON object** with crop names as keys and the above fields as values. Do not include any markdown or code formatting like ```json.
Only return pure JSON.
"""
