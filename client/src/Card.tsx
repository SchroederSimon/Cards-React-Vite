import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { createNestCard } from './api/createNestCard';
import { deleteCard } from './api/deleteCard';
import { getCard } from './api/getCard';
import { TCard } from './api/getCards';
import "./Card.css"

export default function Card() {
    const [card, setCard] = useState<TCard | undefined>();
    const [cards, setCards] = useState<string[]>([]);
    const [text, setText] = useState("");
    const { cardId } = useParams();

    async function handleCreateCard(e: React.FormEvent) {
        e.preventDefault();
        const { text: serverCards } = await createNestCard(cardId!, text)
        setCards(serverCards);
        setText("");
    }

    async function handleDeleteCardOnCard(index: number) {
        if (!cardId) return;
        const newCard = await deleteCard(cardId, index);
        setCards(newCard.text)
    }

    useEffect(() => {
        async function fetchCard() {
            if (!cardId) return;
            const newCard = await getCard(cardId);
            setCard(newCard);
            setCards(newCard.text)
        }
        fetchCard();
    }, [cardId]);

    return (
        <div className="Deck">
            <h1>{card?.title}</h1>
            <ul className="nestedCards">
                {cards.map((card, index) => (
                    <li key={index}>
                        <button onClick={() => handleDeleteCardOnCard(index)}>X</button>
                        {card}
                    </li>
                ))};
            </ul>
            <form onSubmit={handleCreateCard} action="">
                <label htmlFor='card-text'>Card text</label>
                <input id="card-text" type="text"
                    value={text}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setText(e.target.value);
                    }}
                />
                <button>Create card</button>
            </form>
        </div>
    )
}
