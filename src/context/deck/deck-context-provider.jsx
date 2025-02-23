import React, { useContext, useEffect, useState } from "react";
import DeckContext from "./deck-context";
import CardContext from "../card/card-context";
import MockDeck from "../../data/mock";
import getLastStudiedLabel from "../../helper/get-last-studied";

const DeckContextProvider = ({ children }) => {
  const [allDeck, setAllDeck] = useState(() => {
    const savedDecks = localStorage.getItem("decks");
    console.log(JSON.parse(savedDecks));
    return savedDecks ? JSON.parse(savedDecks) : [MockDeck];
  });

  const [deckImage, setDeckImage] = useState(null);
  const [deckTitle, setDeckTitle] = useState("");
  const [deckDescription, setDeckDescription] = useState("");

  const { cardData, resetCardData } = useContext(CardContext);

  useEffect(() => {
    localStorage.setItem("decks", JSON.stringify(allDeck));
  }, [allDeck]);

  function resetCurrentDeck() {
    setDeckImage("");
    setDeckTitle("");
    setDeckDescription("");

    resetCardData();
  }

  function getNewDeck() {
    const deckObj = {
      id: allDeck.length + 1,
      image: deckImage
        ? deckImage
        : "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: deckTitle,
      description: deckDescription,
      color: "bg-yellow",
      lastStudied: "Today",
      totalCards: cardData.length,
      cards: cardData,
    };

    return deckObj;
  }

  const saveNewDeck = () => {
    const newDeck = getNewDeck();
    newDeck.timestamp = Date.now();
    newDeck.lastStudied = getLastStudiedLabel(newDeck.timestamp);

    setAllDeck((currentAllDeck) => [...currentAllDeck, newDeck]);
    resetCurrentDeck();
  };

  const saveCurrentDeck = (deckId) => {
    const updatedDeck = getNewDeck();
    updatedDeck.id = deckId;
    updatedDeck.timestamp = Date.now();
    updatedDeck.lastStudied = getLastStudiedLabel(
      allDeck.find((item) => item.id === deckId).timestamp
    );

    setAllDeck((currentAllDeck) =>
      currentAllDeck.map((item) => (item.id === deckId ? updatedDeck : item))
    );
    //resetCurrentDeck();
  };

  const deleteDeck = (deckId) => {
    setAllDeck((currentAllDeck) =>
      currentAllDeck.filter((item) => item.id !== deckId)
    );

    resetCurrentDeck();
  };

  return (
    <DeckContext.Provider
      value={{
        allDeck,
        saveNewDeck,
        deckImage,
        deckTitle,
        deckDescription,
        setDeckTitle,
        setDeckImage,
        setDeckDescription,
        resetCurrentDeck,
        saveCurrentDeck,
        deleteDeck,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
};

export default DeckContextProvider;
