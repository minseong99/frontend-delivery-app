import React, { Fragment } from "react";
import MainHeader from "../components/UI/MainHeader";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main className={classes.mainSection}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
