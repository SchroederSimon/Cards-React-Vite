import { Request, Response } from "express"
import Card from "../models/Card";


export async function createCardController(req: Request, res: Response) {
    const newCard = new Card({
        title: req.body.title
    });
    const createdCar = await newCard.save();
    res.json(createdCar);
}