import { API_URL } from "./config";

export type TCard = {
  title: string;
  text: string[];
  _id: string;
}

export async function getCards(): Promise <TCard[]> {
  const response = await fetch(`${API_URL}/cards`);
  return response.json();
}