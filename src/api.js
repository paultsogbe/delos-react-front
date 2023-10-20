const BASE_URL = "http://localhost:3000"; // ici je remplace par l'URL du backend

const api = {
    async askQuestion(question) {
        try {
            const response = await fetch(`${BASE_URL}/rugby/ask`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ question }),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    },
};

export default api;
