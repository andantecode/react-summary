import axios from "axios";

export async function fetchOpenAI(content) {
    const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: `다음 내용을 한 줄 요약해줘 ${content}`,
                }
            ],
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
            }
        }
    )

    return res.data;
}