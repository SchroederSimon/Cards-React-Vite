import { Request, Response } from "express"
import Card from "../models/Card";

export async function deleteCardController(req: Request, res: Response) {
    const cardId = req.params.cardId;
    const card = await Card.findByIdAndDelete(cardId);
    res.json(card);
}