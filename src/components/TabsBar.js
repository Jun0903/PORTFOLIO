import { useLocation } from "react-router-dom";

import ReactIcon from "../icons/ReactIcon";
import HtmlIcon from "../icons/HtmlIcon";
import JsIcon from "../icons/JsIcon";
import JsonIcon from "../icons/JsonIcon";
import CssIcon from "../icons/CssIcon";
import Tab from "./Tab";

import style from "../styles/TabsBar.module.css";

const TabsBar = () => {
  const location = useLocation();
  const pathName = location.pathname;

  //css 적인 요소로 display: "none" 이 들어간다
  // 안된다면 철자 확인을 다시해 보자
  return (
    <div
      className={style.tabsbar}
      style={pathName === "/code-example" ? { display: "none" } : {}}
    >
      <Tab Icon={ReactIcon} path={"/"} title={"home.jsx"} />
      <Tab Icon={HtmlIcon} path={"/about"} title={"about.html"} />
      <Tab Icon={CssIcon} path={"/contact"} title={"contact.css"} />
      <Tab Icon={JsIcon} path={"/project"} title={"project.js"} />
      <Tab Icon={JsonIcon} path={"/blog"} title={"blog.json"} />
    </div>
  );
};

export default TabsBar;
