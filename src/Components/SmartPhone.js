//Stateless
import React from "react";
import SmartPhoneItem from "./SmartPhoneItem";

const SmartPhone = () => {
  return (
    <div>
      <h1>BEST SMARTPHONE</h1>
      <div className="row">
        <div className="col-md-3">
          <SmartPhoneItem />
        </div>
        <div className="col-md-3">
          <SmartPhoneItem />
        </div>
        <div className="col-md-3">
          <SmartPhoneItem />
        </div>
        <div className="col-md-3">
          <SmartPhoneItem />
        </div>
      </div>
    </div>
  )
}

export default SmartPhone;