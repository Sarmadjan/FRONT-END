/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import "./Project_card.css";


const Card = (props) => {
  // Create refs for the card and image elements
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current && cardRef.current) {
      const imageHeight = imageRef.current.offsetHeight;
      const cardHeight = cardRef.current.offsetHeight;

      // Set the CSS custom property (--img-height) to the difference of image and card height
      cardRef.current.style.setProperty('--img-height', `${Math.abs(imageHeight - cardHeight)}px`);
    }
  }, []);

  return (
    <>

      <div className="row d-flex  justify-content-center mt-3">
        <div className="col-12 card mx-auto" ref={cardRef}>
          <img
            src={props.imgpath}
            alt="Long Screenshot"
            className="card-image"
            ref={imageRef}
          />
        </div>
        <div className="col-12 px-md-5 px-4 pt-3">
          <h2>{props.title}</h2>
          <p className=' col text-dark'>
            {props.detail}
          </p>
        </div>
      </div>

    </>
  );
};

export default Card;
