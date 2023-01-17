import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { createCards } from './api/createCards';
import { deleteCards } from './api/deleteCards';
import { getCards, TCard } from './api/getCards';
import './App.css'



function App() {
  const [cards, setCards] = useState<TCard[]>([]);
  const [title, setTitle] = useState("");

  async function handleCreateCard(e: React.FormEvent) {
    e.preventDefault();
    const card = await createCards(title)
    setCards([...cards, card]);
    setTitle("");
  }

  async function handleDeleteCard(cardId: string) {
    await deleteCards(cardId);
    setCards(cards.filter((card) => card._id !== cardId));
  }

  useEffect(() => {
    async function fetchCards() {
      const newCards = await getCards();
      setCards(newCards);
    }
    fetchCards();
  }, []);

  return (
    <div className="App">
      <h1>Cards</h1>
      <ul className="cards">
        {cards.map((card) => (
          <li key={card._id}>
            <button onClick={() => { handleDeleteCard(card._id) }}>X</button>
            <Link to={`cards/${card._id}`}>{card.title}</Link>
          </li>
        ))}
      </ul>

      <form onSubmit={handleCreateCard} action="">
        <label htmlFor='card-title'>Card title</label>
        <input id="card-title" type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />

        <button>Create card</button>
      </form>
    </div>
  )
}

export default App
