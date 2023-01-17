import { Request, Response } from "express"
import Card from "../models/Card";


export async function getCardController(req: Request, res: Response) {
    const cards = await Card.find();
    res.json(cards);
}