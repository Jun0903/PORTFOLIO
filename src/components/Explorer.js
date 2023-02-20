import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import ReactIcon from "../icons/ReactIcon";
import HtmlIcon from "../icons/HtmlIcon";
import CssIcon from "../icons/CssIcon";
import JsIcon from "../icons/JsIcon";
import JsonIcon from "../icons/JsonIcon";
import BehindIcon from "../icons/BehindIcon";

import style from "../styles/Explorer.module.css";

const Files = [
  {
    Icon: ReactIcon,
    path: "/",
    title: "home.jsx",
  },
  {
    Icon: HtmlIcon,
    path: "/about",
    title: "about.html",
  },
  {
    Icon: CssIcon,
    path: "/contact",
    title: "contact.css",
  },
  {
    Icon: JsIcon,
    path: "/project",
    title: "project.js",
  },
  {
    Icon: JsonIcon,
    path: "/blog",
    title: "blog.json",
  },
];

const Explorer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;
  const [toggle_menu, setToggle_menu] = useState(true);

  //transform: "rotate(90deg) 에 대해서 알아보자"
  //transform 속성으로 요소에 회전,크기조절, 기울이기, 이동 효과를 부여할 수 있다.
  //transform: "rotate" 가 들어가면 해당 개체의 기준점을 변경할 수 있다.
  //rotate(90deg) 이면 90도 만큼 회전
  return (
    <section className={style.explorer}>
      <div className={style.title}>Explorer</div>
      <div
        className={style.heading}
        onClick={() => {
          setToggle_menu((toggle_menu) => !toggle_menu);
        }}
      >
        <BehindIcon
          className={style.icon}
          style={toggle_menu ? { transform: "rotate(90deg)" } : {}}
        />
        Portfolio
      </div>
      <div
        className={style.files_list}
        style={toggle_menu ? { display: "block" } : { display: "none" }}
      >
        {Files.map(({ Icon, path, title }) => {
          return (
            <div
              className={style.file}
              onClick={() => {
                navigate(path);
              }}
              key={path}
              style={
                pathName === path
                  ? { backgroundColor: "var(--explorer-hover-bg)" }
                  : {}
              }
            >
              <Icon className={style.icon} />
              <span>{title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Explorer;
