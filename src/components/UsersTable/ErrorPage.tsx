import React from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <BeatLoader color={"blue"} loading={true} />
      <h1>Oops! Something went wrong.</h1>
      <p>The page you are looking for does not exist.</p>
      <div style={{ marginTop: "10px" }}>
        <Link to="/" className="link-back">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
