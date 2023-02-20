import { useLocation, useNavigate } from "react-router-dom";

import style from "../styles/Tab.module.css";

const Tab = ({ Icon, path, title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  //Explorer 와  SideBar의 Icon과 Path를 파라미터로 받아서 사용
  return (
    <div
      className={`${style.item} ${pathName === path && style.active}`}
      onClick={() => {
        navigate(path);
      }}
    >
      {console.log(path, pathName)}
      <Icon className={style.icon} />
      <p>{title}</p>
    </div>
  );
};

export default Tab;
