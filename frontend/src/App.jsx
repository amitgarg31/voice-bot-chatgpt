function App() {
  return (
    <div className="container">
      <h1>Voice Chat Assistant 🤖</h1>
      <div id="chat-box" className="chat-box"></div>
      <div className="button-group">
        <button id="start-btn">🎙️ Start Speaking</button>
        <button id="stop-btn">🛑 Stop Speaking</button>
      </div>
      <div id="speaking-indicator" className="modal hidden">🎤 Listening...</div>
    </div>
  );
}

export default App;
