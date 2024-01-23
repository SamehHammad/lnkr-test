import React from "react";
import Nav from "./Nav";

const Navbar = async () => {
  return (
    <div>
      <Nav user={user} />
    </div>
  );
};

export default Navbar;
