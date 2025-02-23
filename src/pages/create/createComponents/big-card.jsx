import { useContext } from "react";
import CardContext from "../../../context/card/card-context";

const BigCard = ({ showFront, cardText }) => {
  const { selectedCard, showSelectedCard } = useContext(CardContext);
  const currentCardData = selectedCard;

  const handleInput = (e) => {
    const value = e.target.innerText;
    showFront
      ? (currentCardData.front = value)
      : (currentCardData.back = value);
  };

  const handleBlur = () => {
    showSelectedCard(currentCardData);
  };

  return (
    <div
      className={`big-card neo-box ${
        showFront ? "bg-green" : "flipped bg-dark-green"
      }`}
    >
      <div className="editable-text">
        <span
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          onBlur={handleBlur}
        >
          {cardText}
        </span>
      </div>
    </div>
  );
};

export default BigCard;
