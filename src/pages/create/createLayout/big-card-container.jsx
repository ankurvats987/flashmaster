import { IoMdAdd } from "react-icons/io";
import Button from "../../../components/button";
import { HiMiniArrowUturnRight } from "react-icons/hi2";
import BigCard from "../createComponents/big-card";
import { useContext, useState, useEffect } from "react";
import CardContext from "../../../context/card/card-context";
import { MdDeleteOutline, MdOutlineDataSaverOn } from "react-icons/md";
import Modal from "../../../components/modal";

const BigCardContainer = () => {
  const [showFront, flipCard] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const {
    selectedCard,
    cardData,
    setCardData,
    showSelectedCard,
    editingMode,
    toggleEditingMode,
  } = useContext(CardContext);

  const handleAdd = () => {
    const newCard = { ...selectedCard, id: cardData.length + 1 };
    setCardData((currentData) => [...currentData, newCard]);
  };

  const handleDelete = () => {
    setCardData((currentData) =>
      currentData.filter((item) => item.id !== selectedCard.id)
    );
    toggleEditingMode(false);
    setShowDeleteModal((prevState) => !prevState);
  };

  const handleUpdate = () => {
    setCardData((currentData) =>
      currentData.map((item) =>
        item.id === selectedCard.id
          ? { ...item, front: selectedCard.front, back: selectedCard.back }
          : item
      )
    );
    toggleEditingMode(false);
  };

  useEffect(() => {
    showSelectedCard({ front: "Front", back: "Back" });
  }, [cardData]);

  return (
    <>
      <div className="big-card-container">
        <BigCard
          showFront={showFront}
          cardText={`${showFront ? selectedCard.front : selectedCard.back}`}
        />
        <div className="button-container">
          <Button
            btnIcon={<HiMiniArrowUturnRight />}
            btnText={"Flip Card"}
            btnColor={"btn-purple"}
            onClick={() => flipCard((prevState) => !prevState)}
          />

          {editingMode ? (
            <>
              <Button
                btnIcon={<MdOutlineDataSaverOn />}
                btnText={"Update Card"}
                btnColor={"btn-green"}
                onClick={handleUpdate}
              />
              <Button
                className={"action"}
                btnIcon={<MdDeleteOutline />}
                btnText={"Delete Card"}
                btnColor={"btn-red"}
                onClick={() => setShowDeleteModal((prevState) => !prevState)}
              />
            </>
          ) : (
            <Button
              btnIcon={<IoMdAdd />}
              btnText={"Add Card"}
              btnColor={"btn-green"}
              onClick={handleAdd}
            />
          )}
        </div>
      </div>
      <Modal
        isOpen={showDeleteModal}
        title={"Are you sure?"}
        desc={
          "Deleting this flashcard is permanent and cannot be undone. If you proceed, all its content will be lost."
        }
      >
        <Button
          btnText={"Cancel"}
          onClick={() => setShowDeleteModal((prevState) => !prevState)}
        />
        <Button
          className={"action"}
          btnColor={"btn-red"}
          btnText={"Delete Permanently"}
          onClick={handleDelete}
        />
      </Modal>
    </>
  );
};

export default BigCardContainer;
