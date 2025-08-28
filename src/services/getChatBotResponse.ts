interface Result {
  output: string;
}

export async function getChatBotResponse(prompt: string): Promise<string> {
  const response = await fetch("https://personal-portfolio-serverless-backe.vercel.app/api/chatbot", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });


  if (!response.ok) {
    const text = await response.text(); // fallback to raw text
    throw new Error(`HTTP ${response.status}: ${text}`);
  }

  const result: Result = await response.json();

  if (result.output) {
    return result.output;
  }

  return JSON.stringify(result);
}

