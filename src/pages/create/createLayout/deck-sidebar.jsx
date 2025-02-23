import Container from "../../../utils/container";
import Button from "../../../components/button";
import { FiSave } from "react-icons/fi";
import { useContext, useState, useEffect, useRef } from "react";
import DeckEditContainer from "../createComponents/deck-edit-container";
import TotalCardsContainer from "../createComponents/total-cards-container";
import DeckContext from "../../../context/deck/deck-context";
import CardContext from "../../../context/card/card-context";
import { useNavigate, useParams } from "react-router";
import Modal from "../../../components/modal";

const DeckSidebar = () => {
  const navigate = useNavigate();
  const { pathParam } = useParams();
  const [tabOpened, toggleTab] = useState("deck-edit");
  const [showActionModal, setActionModal] = useState(false);
  const [showSaveModal, setSaveModal] = useState(false);
  const [showDeleteModal, setDeleteModal] = useState(false);
  const titleInputRef = useRef(null);

  const {
    allDeck,
    deleteDeck,
    deckTitle,
    setDeckImage,
    setDeckTitle,
    setDeckDescription,
    saveNewDeck,
    saveCurrentDeck,
    resetCurrentDeck,
  } = useContext(DeckContext);
  const { setCardData } = useContext(CardContext);

  useEffect(() => {
    if (pathParam) {
      const openedDeck = allDeck.find((item) => item.id === Number(pathParam));

      setDeckTitle(openedDeck.title);
      setDeckDescription(openedDeck.description);
      setDeckImage(openedDeck.image);

      setCardData(openedDeck.cards);
    } else {
      resetCurrentDeck();
    }
  }, [pathParam]);

  const tabOnClick = (tabToOpen) => {
    toggleTab((prevState) => (prevState !== tabToOpen ? tabToOpen : prevState));
  };

  const handleSaveClick = () => {
    if (deckTitle === "") {
      // Cannot save this deck
      setActionModal((prevState) => !prevState);
    } else {
      pathParam ? saveCurrentDeck(Number(pathParam)) : saveNewDeck();
      setSaveModal((prevState) => !prevState);
    }
  };

  const handleCloseClick = () => {
    setActionModal((prevState) => !prevState);
  };

  const handleContinueClick = () => {
    handleCloseClick();
    setTimeout(() => titleInputRef.current?.focus(), 0); // Ensures input is focused after modal closes
  };

  const handleEditingClick = () => {
    navigate(`/create-deck/${allDeck.length}`);
    setSaveModal((prevState) => !prevState);
  };

  const handleViewClick = () => {
    setSaveModal((prevState) => !prevState);
    resetCurrentDeck(); // Reset current deck if its an existing deck
    navigate("/view-deck");
  };

  const handleNoClick = () => {
    setDeleteModal((prevState) => !prevState);
  };

  const handleDeleteClick = () => {
    deleteDeck(Number(pathParam));
    setDeleteModal((prevState) => !prevState);
    navigate("/view-deck");
  };

  return (
    <>
      <div className="deck-sidebar">
        <div className="neo-box">
          <Container display="flex" direction="column">
            <div className="button-container">
              <Button
                onClick={() => tabOnClick("deck-edit")}
                className={`${tabOpened === "deck-edit" ? "bg-lavender" : ""}`}
                btnText={"Deck Editor"}
              />
              <Button
                onClick={() => tabOnClick("cards")}
                className={`${tabOpened === "cards" ? "bg-lavender" : ""}`}
                btnText={"Cards"}
              />
            </div>

            <div className="sidebar-container">
              {tabOpened === "deck-edit" ? (
                <DeckEditContainer ref={titleInputRef} />
              ) : (
                <TotalCardsContainer />
              )}
            </div>
          </Container>
        </div>
        <div className="button-container">
          <Button
            btnColor={"btn-blue"}
            btnIcon={<FiSave />}
            btnText={`${pathParam ? "Save Deck" : "Save New Deck"}`}
            onClick={handleSaveClick}
          />

          {pathParam && (
            <Button
              className={"action"}
              btnColor={"btn-red"}
              btnIcon={<FiSave />}
              btnText={"Delete Deck"}
              onClick={() => setDeleteModal((prevState) => !prevState)}
            />
          )}
        </div>
      </div>
      <Modal
        isOpen={showActionModal}
        title={"Action Required"}
        desc={
          "Your deck must have a title before it can be saved. Please enter a title to proceed and ensure your progress is not lost."
        }
      >
        <Button btnText={"Continue"} onClick={handleContinueClick} />
        <Button
          className={"action"}
          btnText={"Cancel"}
          btnColor={"btn-dark-green"}
          onClick={handleCloseClick}
        />
      </Modal>
      <Modal
        title={"Saved Successfully!"}
        desc={
          "Your deck has been saved successfully. You can now access it anytime and continue editing or using it as needed."
        }
        isOpen={showSaveModal}
      >
        <Button btnText={"Continue Editing"} onClick={handleEditingClick} />
        <Button
          className={"action"}
          btnText={"View Decks"}
          btnColor={"btn-dark-green"}
          onClick={handleViewClick}
        />
      </Modal>
      <Modal
        title={"Are you sure?"}
        desc={
          "Once you delete this deck, all its cards will be permanently removed. This action cannot be undone. Do you still want to proceed?"
        }
        isOpen={showDeleteModal}
      >
        <Button btnText={"No"} onClick={handleNoClick} />
        <Button
          className={"action"}
          btnText={"Delete Deck"}
          btnColor={"btn-red"}
          onClick={handleDeleteClick}
        />
      </Modal>
    </>
  );
};

export default DeckSidebar;
