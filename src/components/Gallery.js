import React from "react";
import { Link } from "react-router-dom";

function Gallery(props) {
  return (
    <>
      <div className="gallery">
        <img src={props.image} alt="" />
        <h3>Room in {props.kasi}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus, vitae.
        </p>
        <Link to="/" className="views">
          more photos
        </Link>
        |
        <Link to="/" className="views">
          book viewing
        </Link>
      </div>
    </>
  );
}

export default Gallery;
