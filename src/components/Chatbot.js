import React, { useState } from "react";
import api from "../api";

function Chatbot() {
    const [userInput, setUserInput] = useState("");
    const [botResponse, setBotResponse] = useState("");

    const handleUserInput = async () => {
        try {
            const response = await api.askQuestion(userInput);
            setBotResponse(response);
        } catch (error) {
            console.error(
                "Erreur lors de la récupération de la réponse du serveur",
                error
            );
        }
    };

    return (
        <div className="chatbot">
            <div className="chat-container">
                <div className="user-input">{userInput}</div>
                <div className="bot-response">{botResponse}</div>
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button onClick={handleUserInput}>Envoyer</button>
            </div>
        </div>
    );
}

export default Chatbot;
