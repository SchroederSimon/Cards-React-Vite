import { API_URL } from "./config";

export async function deleteCards(cardId: string) {
  await fetch(`${API_URL}/cards/${cardId}`, {
    method: "DELETE"
  });
}