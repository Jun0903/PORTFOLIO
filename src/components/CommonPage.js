import { Routes, Route } from "react-router-dom";

import style from "./../styles/CommonPage.module.css";

import Nav from "./Nav";
import SideBar from "./SideBar";
import Explorer from "./Explorer";
import TabsBar from "./TabsBar";
import Footer from "./Footer";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Project from "../pages/Project";
import Blog from "../pages/Blog";

const CommonPage = () => {
  //   const location = useLocation();
  //   const pathName = location.pathname;

  return (
    <div>
      <Nav />
      <div className={style.layout}>
        <SideBar />
        <Explorer />
        <div className={style.main}>
          <TabsBar />
          <div className={style.content}>
            <Routes>
              <Route path={"/"} element={<Home />}></Route>
              <Route path={"/about"} element={<About />}></Route>
              <Route path={"/contact"} element={<Contact />}></Route>
              <Route path={"/project"} element={<Project />}></Route>
              <Route path={"/blog"} element={<Blog />}></Route>
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommonPage;
