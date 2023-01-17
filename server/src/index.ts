import { config } from "dotenv";
config();

import express, { Request, Response } from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import Card from "./models/Card";
import { getCardController } from "./controllers/getCardController";
import { createCardController } from "./controllers/createCardController";
import { deleteCardController } from "./controllers/deleteCardController";
import { createNestCardController } from "./controllers/createNestCardController";
import { getCardsController } from "./controllers/getCardsController";
import { deleteCardOnCardController } from "./controllers/deleteCardOnCardController";


mongoose.set('strictQuery', true);


const app = express();
const PORT = 5000;

app.use(cors({
    origin: "*"
})
)

app.use(express.json());

// Endpoints
app.get("/cards", getCardController);
app.post("/cards", createCardController);
app.delete('/cards/:cardId', deleteCardController);

// Cards endpoints
app.post('/cards/:cardId/card', createNestCardController);
app.get("/cards/:cardId", getCardsController)
app.delete('/cards/:cardId/card/:index', deleteCardOnCardController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`Listening port ${PORT}`)
    app.listen(PORT);
});

