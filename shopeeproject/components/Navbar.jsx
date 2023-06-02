import React, { useState } from "react";

const MENU_LIST = [
  { text: "Home", href: "/main" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);

  return (
    <header>
      <nav className={`nav`}>
          <a href="/main">
            <h1 className="logo">Shopee</h1>
          </a>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
              }}
              key={menu.text}
            >
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;