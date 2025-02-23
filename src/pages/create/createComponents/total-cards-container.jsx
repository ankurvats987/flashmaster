import { useContext } from "react";
import CardItem from "./card-item";
import CardContext from "../../../context/card/card-context";

const TotalCardsContainer = () => {
  const { cardData } = useContext(CardContext);

  return (
    <div className="total-cards-container">
      {cardData.length > 0 ? (
        cardData.map((item, index) => {
          return <CardItem key={index} cardData={item} />;
        })
      ) : (
        <span className="placeholder-text">No cards added yet.</span>
      )}
    </div>
  );
};

export default TotalCardsContainer;
