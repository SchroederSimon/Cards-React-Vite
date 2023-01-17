import { Request, Response } from "express"
import Card from "../models/Card";


export async function createNestCardController(req: Request, res: Response) {
    const cardId = req.params.cardId;
    const card = await Card.findById(cardId);
    if (!card) return res.status(400).send('No card of this id exist');
    const { text } = req.body;
    card.text.push(text);
    await card.save();
    res.json(card);
}