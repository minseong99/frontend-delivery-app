import React, { Fragment } from "react";
import MainHeader from "../components/UI/MainHeader";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
