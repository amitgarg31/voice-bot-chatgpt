from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from backend.chat import get_chatgpt_response
from backend.models import QuestionRequest, AnswerResponse

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/ask", response_model=AnswerResponse)
async def ask_question(request: QuestionRequest):
    answer = await get_chatgpt_response(request.question)
    return {"answer": answer}
    # return {"answer": "Hello! This is a mock response from ChatGPT."}
