import React, { useState } from "react";
import Card from "../deckDetailComponents/card";
import Button from "../../../components/button";
import Modal from "../../../components/modal";
import { useNavigate } from "react-router";

const ChangingCardsContainer = ({ totalCards, cardData }) => {
  const navigate = useNavigate();
  let [counter, setCounter] = useState(0);
  const [showFront, setShowFront] = useState(true);
  const [showReviewedModal, setReviewedModal] = useState(false);

  const currentCardData = cardData[counter];

  const handleNextClick = () => {
    if (counter < totalCards - 1) {
      setCounter((prevState) => prevState + 1);
      setShowFront(true);
      return;
    } else {
      // Review Done
      setReviewedModal((prevState) => !prevState);
    }
  };

  const handlePrevClick = () => {
    if (counter > 0) {
      setCounter((prevState) => prevState - 1);
      setShowFront(true);
      return;
    }
  };

  const handleFlipClick = () => {
    setShowFront((prevState) => !prevState);
  };

  return (
    <>
      <div className="changing-cards-container">
        {cardData.length === 0 ? (
          <span className="placeholder-text">
            Start adding cards to your deck to view them.
          </span>
        ) : (
          <div className="internal-container">
            <span className="total-cards">{`Card ${
              counter + 1
            } of ${totalCards}`}</span>
            <Card
              className="card"
              showFront={showFront}
              cardText={currentCardData}
            />
            <div className="button-container">
              <Button
                btnColor={"btn-blue"}
                btnText={"Previous"}
                onClick={handlePrevClick}
                disabled={counter === 0}
              />
              <Button
                btnColor={"btn-purple"}
                btnText={"Flip"}
                onClick={handleFlipClick}
              />
              <Button
                btnColor={"btn-blue"}
                btnText={"Next"}
                onClick={handleNextClick}
                disabled={counter === totalCards}
              />
            </div>
          </div>
        )}
      </div>
      <Modal
        title={"Review Completed"}
        desc={
          "You've successfully reviewed all the cards in this deck. Keep practicing to reinforce your knowledge, or explore other decks to continue learning!"
        }
        isOpen={showReviewedModal}
      >
        <Button
          btnText={"Create New Deck"}
          onClick={() => navigate("/create-deck")}
        />
        <Button
          className={"action"}
          btnText={"View Decks"}
          btnColor={"btn-dark-green"}
          onClick={() => navigate("/view-deck")}
        />
      </Modal>
    </>
  );
};

export default ChangingCardsContainer;
