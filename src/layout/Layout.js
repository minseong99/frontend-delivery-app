import React, { Fragment } from "react";
import MainHeader from "../UI/MainHeader";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>props.children</main>
    </Fragment>
  );
};

export default Layout;
