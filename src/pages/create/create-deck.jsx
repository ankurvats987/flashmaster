import Heading from "../../components/heading";
import Header from "../../layout/header";
import BigCardContainer from "./createLayout/big-card-container";
import DeckSidebar from "./createLayout/deck-sidebar";
import "./createStyles/create.scss";

const CreateDeck = () => {
  return (
    <div className="create-deck-page">
      <Heading headingBg={"bg-yellow"} headingTxt={"Create New Deck"} />
      <DeckSidebar />
      <BigCardContainer />
    </div>
  );
};

export default CreateDeck;
