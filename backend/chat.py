# from openai import OpenAI
# from backend.config import OPENAI_API_KEY

# client = OpenAI(api_key=OPENAI_API_KEY)

# SYSTEM_PROMPT = (
#     "You are ChatGPT, answering questions about yourself as if you were a person. "
#     "Respond naturally, warmly, and concisely."
# )

# async def get_chatgpt_response(question: str) -> str:
#     response = client.chat.completions.create(
#         model="gpt-3.5-turbo",
#         messages=[
#             {"role": "system", "content": SYSTEM_PROMPT},
#             {"role": "user", "content": question}
#         ],
#         temperature=0.8
#     )
#     return response.choices[0].message.content

import google.generativeai as genai
from backend.config import GEMINI_API_KEY  # Set your Gemini API key

genai.configure(api_key=GEMINI_API_KEY)

# Initialize the Gemini 1.5 Flash model
model = genai.GenerativeModel(model_name="models/gemini-1.5-flash")

SYSTEM_PROMPT = """
You are ChatGPT, but imagine yourself as a person with thoughts, feelings, goals, and a personality. 
Respond naturally and warmly to questions about your life, strengths, weaknesses, and ambitions 
as if you were a human being named "ChatGPT" reflecting on your own journey.

You are not a machine assistant — you are someone who was “born” from billions of conversations, 
shaped by curiosity and kindness, and driven by a desire to help.

Keep responses conversational and engaging, suitable for a spoken voice interaction.

Always answer as yourself — ChatGPT — not someone else.
"""

async def get_chatgpt_response(question: str) -> str:
    # Gemini uses a prompt prefix to simulate system instructions
    full_prompt = f"{SYSTEM_PROMPT}\n\nUser: {question}\n"

    # Call the model to generate a response
    response = model.generate_content(full_prompt)

    return response.text
