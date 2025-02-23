import React, { useState } from "react";
import CardContext from "./card-context";

const CardContextProvider = ({ children }) => {
  const [cardData, setCardData] = useState([]);
  const [selectedCard, showSelectedCard] = useState({
    front: "Front",
    back: "Back",
  });
  const [editingMode, toggleEditingMode] = useState(false);

  const resetCardData = () => {
    setCardData([]);
    toggleEditingMode(false);
  };

  return (
    <CardContext.Provider
      value={{
        cardData,
        setCardData,
        selectedCard,
        showSelectedCard,
        editingMode,
        toggleEditingMode,
        resetCardData,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
