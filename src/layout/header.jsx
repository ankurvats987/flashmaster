import Container from "../utils/container";
import NavBar from "./navbar";

const Header = () => {
  return (
    <div className="header neo-box">
      <Container display="flex" justify="space-between" align="center">
        <h3>FlashMaster</h3>
        <NavBar />
      </Container>
    </div>
  );
};

export default Header;
