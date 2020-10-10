import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <section className="section">
        <div className="container">{children}</div>
      </section>
    </div>
  );
};

export default Layout;
