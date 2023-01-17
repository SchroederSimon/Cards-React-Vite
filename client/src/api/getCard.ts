import { API_URL } from "./config";
import { TCard } from "./getCards";


export async function getCard(cardId: string): Promise <TCard> {
  const response = await fetch(`${API_URL}/cards/${cardId}`);
  return response.json();
}