import React from "react";
import iphoneX from "../img/sp_iphoneX.png";

const SmartPhoneItem = () => {
  return (
    <div className="card" >
      <img className="card-img-top" src={iphoneX} alt="Card"
        style={{ width: "300px" }} />
      <div className="card-img-overlay">
        <h4 className="card-title">John Doe</h4>
        <p className="card-text">Some example text.</p>
      </div>
    </div>
  )
}

export default SmartPhoneItem;