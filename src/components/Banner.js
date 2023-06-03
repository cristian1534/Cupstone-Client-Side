import React from "react";

const Banner = ({ title, description, newsletter }) => {
  return (
    <div>
      <div className="jumbotron text-center">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{description}</p>
        <hr className="my-4" />
        <p>{newsletter}</p>
        <h3 className="text-danger text-uppercase">Our hot sales!</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="red"
          className="bi bi-arrow-down-square-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
        </svg>
      </div>
    </div>
  );
};

export default Banner;
