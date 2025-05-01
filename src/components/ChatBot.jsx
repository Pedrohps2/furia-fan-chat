import React, { useState } from 'react';
import '../styles/ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: 'Olá, como posso te ajudar?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = input;
      setMessages((prev) => [...prev, { text: userMessage, sender: 'user' }]);
      setInput('');
      handleBotResponse(userMessage);
    }
  };

  const handleBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    let response = '';

    if (msg.includes('jogo') || msg.includes('próxima partida')) {
      response = `A próxima partida será no dia 5 de maio, às 14:00, contra a MIBR.`;
    } else if (msg.includes('ranking')) {
      response = 'O time FURIA está atualmente no 3º lugar no ranking mundial de CS:GO.';
    } else if (msg.includes('time')) {
      response = 'O time FURIA é composto por jogadores como yuurih, KSCERATO, Yekindar, FalleN e molodoy.';
    } else if (msg.includes('vitória')) {
      response = 'FURIA venceu o campeonato Blast Premier em 2023!';
    } else if (msg.includes('torneio')) {
      response = 'O próximo torneio da FURIA será no ESL Pro League, dia 7 de maio.';
    } else if (msg.includes('últimos resultados')) {
      response = 'FURIA venceu a última partida contra a Vitality por 2-1 no Blast Premier, dia 15 de abril!';
    } else if (msg.includes('whatsapp') || msg.includes('contato')) {
      response = 'Claro! Aqui está o contato da FURIA: https://wa.me/5511993404466';
    } else {
      response = 'Desculpe, não entendi. Tente novamente!';
    }

    setMessages((prev) => [...prev, { text: response, sender: 'bot' }]);
  };

  const handleButtonClick = (buttonText) => {
    setMessages((prev) => [...prev, { text: buttonText, sender: 'user' }]);
    handleBotResponse(buttonText);
  };

  const handleContatoClick = () => {
    const contactText = "Claro! Aqui está o contato da FURIA: https://wa.me/5511993404466";
    setMessages((prev) => [
      ...prev,
      { text: "Contato", sender: "user" },
      { text: contactText, sender: "bot" }
    ]);
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'bot' ? 'bot' : 'user'}`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Digite sua mensagem..."
        />
        <button onClick={handleSendMessage}>➤</button>
      </div>

      <div className="button-container">
        <button className="quick-reply" onClick={() => handleButtonClick('Próxima partida')}>
          Próxima partida
        </button>
        <button className="quick-reply" onClick={() => handleButtonClick('Ranking dos jogadores')}>
          Ranking dos jogadores
        </button>
        <button className="quick-reply" onClick={() => handleButtonClick('Últimos resultados')}>
          Últimos resultados
        </button>
        <button className="quick-reply" onClick={() => handleButtonClick('Sobre o time')}>
          Sobre o time
        </button>
        <button className="quick-reply" onClick={handleContatoClick}>
          Contato
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
