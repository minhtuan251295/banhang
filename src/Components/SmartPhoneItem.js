import React from "react";
import iphoneX from "../img/sp_iphoneX.png";

class SmartPhoneItem extends React.Component {

  state = {
    isShowDesc: false
  }

  //Loai 1: ko co tham so
  onClickNoArg() {
    alert(10);
  }

  //Loai 2: co tham so
  onClick(number) {
    alert(number);
  }

  onShowDesc = () => {
    this.setState({
      isShowDesc: !this.state.isShowDesc,
    })
  }

  render() {
    return (
      <div className="card bg-light" style={{ width: 300 }}>
        <img className="card-img-top" src={iphoneX} alt="Card" style={{ maxWidth: "100%", height: "250px" }} />
        <div className="card-body text-center">
          <h4 className="card-title text-center">iPhone X</h4>
          <p className="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p>
          {/*Loai 1 
            <button className="btn btn-primary" onClick={this.onClickNoArg}>Detail</button>
          */}
          {/*Loai 2 
            <button className="btn btn-primary" onClick={() => {this.onClick(10)}}>Detail</button>
          */}
          <button className="btn btn-primary" onClick={this.onShowDesc}>Detail</button>
          {
            // ternary condition
            this.state.isShowDesc ?
              <div>
                iPhone X features a new all-screen design. Face ID, which makes your face your password
              </div> : ""
          }

        </div>
      </div>
    )
  }
}
export default SmartPhoneItem;

