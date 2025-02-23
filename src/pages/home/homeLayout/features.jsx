import { BiBrain } from "react-icons/bi";
import Heading from "../../../components/heading";
import Feature from "../homeComponents/feature";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { MdAutoGraph, MdOutlineHandshake } from "react-icons/md";

const Features = () => {
  const data = [
    {
      icon: <BiBrain size={48} />,
      heading: "Smart Learning",
      description: "Adaptive learning system that focuses on your weak points",
    },
    {
      icon: <HiOutlineLightningBolt size={48} />,
      heading: "Quick Creation",
      description:
        "Create flashcard decks in minutes with our intuitive interface",
    },
    {
      icon: <MdAutoGraph size={48} />,
      heading: "Track Progress",
      description: "Monitor your learning progress with detailed analytics",
    },
    {
      icon: <MdOutlineHandshake size={48} />,
      heading: "Collaborative",
      description: "Share decks and learn together with friends",
    },
  ];

  return (
    <div className="features">
      <Heading headingTxt={"Why Choose FlashMaster?"} headingBg={"bg-green"} />
      <div className="feature-box-container">
        {data.map((item) => {
          return (
            <Feature
              key={item.icon}
              FeatIcon={item.icon}
              FeatHeading={item.heading}
              FeatDesc={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
