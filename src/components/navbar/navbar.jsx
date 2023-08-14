import React, { useState, useEffect } from "react";
import style from "./navbar.module.css";
import { HiMenu } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";

const Navbar = ({toggleSidebar}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <div className={style.navbar}>
      <HiMenu
        size={"35px"}
        fill={isMobile ? "black" : "white"}
        className={style.menuIcon}
        onClick={toggleSidebar}
      />
      <input type="text" className={style.navbarInput} placeholder="Buscar" />
      <BsCartFill
        size={"35px"}
        fill={isMobile ? "black" : "white"}
        className={style.cartIcon}
      />
    </div>
  );
};

export default Navbar;
