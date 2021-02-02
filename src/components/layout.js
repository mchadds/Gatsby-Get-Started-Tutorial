import React from "react";
import layoutStyles from "./layout.module.css";

const Layout = ({ children }) => {
  return <div className={layoutStyles.layout}>
    <h3>Website Name</h3>
    {children}
  </div>
}

export default Layout;