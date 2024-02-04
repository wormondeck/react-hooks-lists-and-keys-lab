import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const strings = links.map((link, index) => {
    return <a href={`#${link}`} key={index}>{link}</a>
  })

  return <nav>{strings}</nav>;
}

export default NavBar;
