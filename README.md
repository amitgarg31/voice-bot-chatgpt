# 🎙️ Voice Bot ChatGPT

A real-time voice chat web application powered by OpenAI’s ChatGPT. Users can speak with the bot, receive spoken responses, and experience a seamless two-way voice interaction – all inside the browser.

## 🔧 Features

- 🎤 Real-time speech recognition using Web Speech API
- 🤖 OpenAI ChatGPT-powered text response generation
- 🔊 Speech synthesis for bot replies
- 🖥️ Simple, stylish, and responsive UI
- ⏹️ Stop and interrupt responses anytime
- 🚀 Fully working backend (FastAPI) + frontend (Vite + React)

---

## 📁 Project Structure

```
voice-bot-chatgpt/
├── backend/
│   ├── main.py           # FastAPI backend
│   └── ...
├── frontend/             
│   ├── index.html        # Main HTML page
│   ├── script.js         
│   ├── style.css        
│   ├── package.json      
│   └── ...
├── .gitignore
├── README.md
└── requirements.txt
```

---

## 🛠️ Getting Started

### 🔙 Backend Setup (FastAPI)

1. **Create virtual environment & activate**:
   ```bash
   python -m venv .venv
   source .venv/bin/activate     # On Windows: .venv\Scripts\activate
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Create `.env` file**:
   ```env
   GEMINI_API_KEY = your_gemini_key
   OPENAI_API_KEY=your_openai_key
   ```

4. **Run FastAPI server**:
   ```bash
   uvicorn backend.main:app --host 0.0.0.0 --port 8000
   ```

---

### 🖥️ Frontend Setup (Vite + React)

1. **Install dependencies**:
   ```bash
   cd frontend
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. The app will be available at:
   ```
   http://localhost:5173
   ```

---

## 🌐 API Endpoint

- `POST /ask`: Accepts text and returns GPT-generated response.

---

## 🧩 Environment Variables

In the root directory, create a `.env` file with:

```env
OPENAI_API_KEY=your_openai_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here
```

---

## 🚫 .gitignore

The following files/folders are ignored:

- `.venv/`
- `.env`
- `node_modules/`

---

## 📦 Deployment

You can deploy:

- **Backend**: Render, Railway, Fly.io
- **Frontend**: Vercel, Netlify

Make sure to configure environment variables and CORS properly for production.

---

## 🧠 Future Improvements

- Add Whisper API for more accurate speech-to-text
- Support multiple languages
- Add avatars or animated bot UI
- Save chat history or export chats

---

## 🙌 Credits

- [OpenAI](https://openai.com/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [FastAPI](https://fastapi.tiangolo.com/)

---

## 📜 License

MIT License
