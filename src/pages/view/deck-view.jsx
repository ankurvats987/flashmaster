import React from "react";
import Header from "../../layout/header";
import Heading from "../../components/heading";
import "./viewStyles/view.scss";
import DeckGridContainer from "./viewLayout/deck-grid-container";

const DeckView = () => {
  return (
    <div className="view-deck-page">
      <Heading headingTxt={"Your Decks"} headingBg={"bg-blue"} />
      <DeckGridContainer />
    </div>
  );
};

export default DeckView;
