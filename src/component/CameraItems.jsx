import React from "react";

function CameraItems(props) {
  return (
    <div className="camera-item">
     
        <img src={props.img} />
        <span>{props.title}</span>

        <div className="details">
          <p>FREE Shipping on eligible orders</p>
          <span>$ 250</span>
        </div>
      </div>
    
  );
}

export default CameraItems;
