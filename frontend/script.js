const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const chatBox = document.getElementById("chat-box");
const speakingIndicator = document.getElementById("speaking-indicator");

// Example in React
const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:8000";


let currentUtterance = null;

const appendMessage = (text, sender) => {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
};

const speak = (text) => {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
  currentUtterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(currentUtterance);
};

const listen = () => {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();
  speakingIndicator.classList.remove("hidden");

  recognition.onresult = async (event) => {
    const userText = event.results[0][0].transcript;
    appendMessage(userText, "user");
    speakingIndicator.classList.add("hidden");

    try {
      const res = await fetch(`${API_BASE_URL}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userText }),
      });

      const data = await res.json();
      appendMessage(data.answer, "bot");
      speak(data.answer);
    } catch (error) {
      appendMessage("Error contacting server.", "bot");
      speakingIndicator.classList.add("hidden");
    }
  };

  recognition.onerror = () => {
    appendMessage("Sorry, couldn't hear that. Try again.", "bot");
    speakingIndicator.classList.add("hidden");
  };
};

startBtn.addEventListener("click", () => {
  listen();
});

stopBtn.addEventListener("click", () => {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
});
