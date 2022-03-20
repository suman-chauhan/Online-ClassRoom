import React from "react";
import "./footer.css";

const WEBFooter = () => {
  return (
    <div
      style={{ backgroundColor: "#f1f1f1" }}
      className="mt-5 pt-2 pb-2 footer"
    >
      <div className="container">
        <div className="row"></div>
        <div className="row mt-2">
          <div className="col copyright">
            <p className="">
              <p
                style={{ fontSize: "18px", fontWeight: "bold" }}
                className="text-black-50 text-center"
              >
                {" "}
                <a href="http://www.myclassRoom.com"></a>
                http://www.myclassRoom.com © 2022. All Rights Reserved.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WEBFooter;
