import React from "react";
import style from "./sidebar.module.css";
import Logo from "./../../assets/logo.jpg";
import { categorys } from "./arrCategory";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <img className={style.logo} src={Logo} alt="logo" />
      <div>
        <h2>CATEGORIAS</h2>
        <div className={style.sidebarCategorias}>
          {categorys.map((x) => (
            <div key={x}>
              <span>{x}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
