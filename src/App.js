import React from "react";
import Chatbot from "./components/Chatbot";
import Sidebar from "./components/Chatbot";
import UserHistory from "./components/UserHistory";

function App() {
    return (
        <div className="app">
            <Sidebar />
            <Chatbot />
            <UserHistory />
        </div>
    );
}

export default App;
