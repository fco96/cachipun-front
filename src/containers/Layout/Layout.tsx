import React from "react";

const styles = require("./Layout.module.scss");

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <section className="section">
        <div className="container">{children}</div>
      </section>
    </div>
  );
};

export default Layout;
