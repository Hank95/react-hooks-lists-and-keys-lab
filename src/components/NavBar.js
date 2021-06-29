import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const lilinks = links.map((li) => {
    return (
      <a key={li} href={"#" + li}>
        {li}
      </a>
    );
  });

  return <nav>{lilinks}</nav>;
}

export default NavBar;
