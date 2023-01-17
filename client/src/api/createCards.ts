import { API_URL } from "./config";

export async function createCards(title: string) {
    const response = await fetch(`${API_URL}/cards`, {
        method: "POST",
        body: JSON.stringify({
          title
        }),
        headers: {
          "Content-Type": 'application/json'
        }
      });
      return response.json();
}