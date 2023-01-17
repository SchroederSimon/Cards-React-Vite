import { API_URL } from "./config";
import { TCard } from "./getCards";

export async function deleteCard(cardId: string, index: number): Promise <TCard> {
  const response = await fetch(`${API_URL}/cards/${cardId}/card/${index}`, {
    method: "DELETE"
  });
  return response.json();
}