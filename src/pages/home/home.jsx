import Header from "../../layout/header";
import HeroSection from "./homeLayout/hero-section";
import Features from "./homeLayout/features";
import Footer from "./homeLayout/footer";
import "./homeStyles/home.scss";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
