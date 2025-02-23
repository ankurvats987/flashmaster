const Feature = ({ FeatIcon, FeatHeading, FeatDesc }) => {
  return (
    <div className="feature-box neo-box">
      {FeatIcon}
      <h3>{FeatHeading}</h3>
      <p>{FeatDesc}</p>
    </div>
  );
};

export default Feature;
