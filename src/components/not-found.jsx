import React from "react";
import { Link } from "react-router";
import Button from "./button";

const NotFound = ({
  errorMessage = "The page you're looking for doesn't exist, yet. Come back later.",
}) => {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__message">{errorMessage}</p>
        <Link to="/">
          <Button className="not-found__button" btnText={"Go Back Home"} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
