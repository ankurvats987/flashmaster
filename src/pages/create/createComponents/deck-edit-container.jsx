import { forwardRef, useContext, useRef } from "react";
import { FaRegImage } from "react-icons/fa";
import DeckContext from "../../../context/deck/deck-context";

const DeckEditContainer = forwardRef((props, titleInputRef) => {
  const fileInputRef = useRef(null);

  const {
    deckTitle,
    setDeckTitle,
    deckDescription,
    setDeckDescription,
    deckImage,
    setDeckImage,
  } = useContext(DeckContext);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDeckImage(reader.result); // Store base64 image data
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <form className="deck-edit-container" action="">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />

      <div className="deck-image-container" onClick={handleClick}>
        {deckImage ? (
          <img className="deck-image" src={deckImage} alt="Uploaded" />
        ) : (
          <div className="upload-image-container">
            <FaRegImage />
            Click to upload deck image.
          </div>
        )}
      </div>
      <input
        ref={titleInputRef}
        value={deckTitle}
        placeholder="Deck Title"
        type="text"
        name="deck-title"
        id="deck-title"
        onChange={(e) => setDeckTitle(e.target.value)}
      />
      <textarea
        value={deckDescription}
        placeholder="Deck Description"
        onChange={(e) => setDeckDescription(e.target.value)}
      />
    </form>
  );
});

export default DeckEditContainer;
