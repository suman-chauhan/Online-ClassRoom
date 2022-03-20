import React from "react";
import NavBar from "../Header/header";
import WEBFooter from "../Footer/footer";

const MainLayout = (props) => {
    console.log(props);
  return (
    <div>
      {" "}
      <NavBar />
      {props.children}
      <WEBFooter/>
    </div>
    
  );
};

export default MainLayout;
