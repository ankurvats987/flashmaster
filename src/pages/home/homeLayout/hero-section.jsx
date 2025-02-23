import Container from "../../../utils/container";
import Button from "../../../components/button";
import { IoMdAdd } from "react-icons/io";
import { PiCardsThree } from "react-icons/pi";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-section neo-box bg-lavender">
      <Container>
        <h1>
          Learn Smarter,<br></br> Not Harder
        </h1>
        <p>
          Transform your learning experience with FlashMaster's innovative
          flashcard system. Create, study, and master any subject with our
          powerful learning tools.
        </p>
        <div className="button-container">
          <Button
            btnIcon={<IoMdAdd />}
            btnColor={"btn-yellow"}
            btnText={"Start Creating"}
            onClick={() => navigate("/create-deck")}
          />
          <Button
            btnIcon={<PiCardsThree />}
            btnColor={"btn-blue"}
            btnText={"Browse Decks"}
            onClick={() => navigate("/view-deck")}
          />
        </div>
      </Container>

      <div className="hero-diagonal"></div>
    </div>
  );
};

export default HeroSection;
