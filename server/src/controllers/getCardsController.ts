import { Request, Response } from "express"
import Card from "../models/Card";


export async function getCardsController(req: Request, res: Response) {
    const { cardId } = req.params;
    const cards = await Card.findById(cardId);
    res.json(cards);
}