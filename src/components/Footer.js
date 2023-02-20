import style from "../styles/Footer.module.css";

import BranchIcon from "./../icons/BranchIcon";
import ErrorIcon from "./../icons/ErrorIcon";
import WarningIcon from "./../icons/WarningIcon";
import CheckIcon from "./../icons/CheckIcon";
import BellIcon from "./../icons/BellIcon";
import ReactIcon from "./../icons/ReactIcon";

//target="_blank" -> a태그, react나 vue에서 Link나 router-link로 사용하는 경우, 이동할 주소나 화면을 새창으로 열어주는 기능
//rel="noopener noreferrer" -> 1. noopener: 기존 메인페이지를 특정 URL로 이동시키는 window.opener 속성을 사용 할 수 없다
//2. noreferrer : 새로 생긴 페이지에서 특정 URL로 이동시키는 window.opener 속성을 사용할 수 없다.

const Footer = () => {
  return (
    <footer>
      <div className={style.left}>
        <a
          className={style.icon_wrap}
          href="https://github.com/Jun0903"
          target="_blank"
          rel="noopener noreferrer"
          title="새창으로 열기"
        >
          <BranchIcon className={style.icon} fill={"#fff"} />
          main
        </a>
        <div className={style.icon_items}>
          <span className={`${style.icon_wrap} ${style.icono_error}`}>
            <ErrorIcon className={style.icon} /> 0
          </span>
          <span className={`${style.icon_wrap} ${style.icon_warning}`}>
            <WarningIcon className={style.icon} /> 0
          </span>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.icon_wrap}>
          <ReactIcon className={style.icon} />
          Powered by React.js
        </div>
        <div className={style.icon_wrap}>
          <CheckIcon className={style.icon} /> Prettier
        </div>
        <div className={style.icon_wrap}>
          <BellIcon className={style.icon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
