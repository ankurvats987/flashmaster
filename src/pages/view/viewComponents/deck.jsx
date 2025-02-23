import React from "react";
import { Link } from "react-router";
import { MdOutlineModeEdit } from "react-icons/md";
import Button from "../../../components/button";

const Deck = ({ deckDetail }) => {
  return (
    <div className="outside-container">
      <Link to={`/view-deck/${deckDetail.id}`} className="deck-link">
        <div className="deck">
          <img className="image" src={deckDetail.image} alt="Deck Image" />
          <div className={`detail ${deckDetail.color}`}>
            <h4 className="title">{deckDetail.title}</h4>

            <span className="total-cards">{`${deckDetail.totalCards} cards`}</span>
            <span className="last-studied">
              {`Last Studied: ${deckDetail.lastStudied}`}
            </span>
          </div>
        </div>
      </Link>

      <Link to={`/create-deck/${deckDetail.id}`}>
        <Button
          className={"edit-btn"}
          btnIcon={<MdOutlineModeEdit style={{ fontSize: "1.2rem" }} />}
        />
      </Link>
    </div>
  );
};

export default Deck;
