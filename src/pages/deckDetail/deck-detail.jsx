import { useParams } from "react-router";
import Header from "../../layout/header";
import Heading from "../../components/heading";
import ChangingCardsContainer from "./deckDetailLayout/changing-cards-container";
import "./deckDetailStyles/deck-detail.scss";
import { useContext } from "react";
import DeckContext from "../../context/deck/deck-context";

const DeckDetail = () => {
  const { deckId } = useParams();
  const { allDeck } = useContext(DeckContext);

  const currentDeck = allDeck.find((item) => item.id === Number(deckId));

  if (!currentDeck) {
    throw new Error("Deck not found!");
  }

  return (
    <div className="deck-detail-page">
      <Heading headingBg={"bg-green"} headingTxt={currentDeck.title} />
      <ChangingCardsContainer
        totalCards={currentDeck.totalCards}
        cardData={currentDeck.cards}
      />
    </div>
  );
};

export default DeckDetail;
