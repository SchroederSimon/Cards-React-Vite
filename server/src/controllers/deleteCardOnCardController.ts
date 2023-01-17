import { Request, Response } from "express"
import Card from "../models/Card";

export async function deleteCardOnCardController(req: Request, res: Response) {
    const cardId = req.params.cardId;
    const index = req.params.index;
    const card = await Card.findById(cardId);
    if(!card) return res.status(400).send("Card id doesnt exist");
    card.text.splice(parseInt(index), 1);
    await card.save();
    res.json(card)
}