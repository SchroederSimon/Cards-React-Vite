import { API_URL } from "./config";
import { TCard } from "./getCards";

export async function createNestCard(cardId: string, text: string): Promise<TCard> {
    const response = await fetch(`${API_URL}/cards/${cardId}/card`, {
        method: "POST",
        body: JSON.stringify({
            text
        }),
        headers: {
            "Content-Type": 'application/json'
        }
    });
    return response.json();
}