import { useContext } from "react";
import CardContext from "../../../context/card/card-context";

const CardItem = ({ cardData }) => {
  const { showSelectedCard, toggleEditingMode } = useContext(CardContext);

  const handleClick = () => {
    showSelectedCard(cardData);
    toggleEditingMode(true);
  };

  return (
    <div className="card-item" onClick={handleClick}>
      <span>{cardData.front}</span>
    </div>
  );
};

export default CardItem;
