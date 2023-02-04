import VscodeIcon from "../icons/VscodeIcon";

import style from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <div className={style.nav}>
      <div className={style.nav_wrap}>
        <VscodeIcon className={style.icon} />
      </div>
      <p className={style.nav_title}>TaeJun Jang - PortFolio</p>
      <div className={style.macbutton_wrap}>
        <span className={`${style.macbutton} ${style.macbutton_red}`}></span>
        <span className={`${style.macbutton} ${style.macbutton_yellow}`}></span>
        <span className={`${style.macbutton} ${style.macbutton_green}`}></span>
      </div>
    </div>
  );
};

export default Nav;
