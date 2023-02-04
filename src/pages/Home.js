import { useNavigate } from "react-router-dom";

import VscodeIcon from "../icons/VscodeIcon";

import style from "./../styles/Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={style.home}>
      <div className={style.inside}>
        <VscodeIcon className={style.icon_vscode} />
        <div className={style.introduction}>
          <h1>Hello Everyone!</h1>
        </div>
        <p className={style.heading}>I'm Junior FrontEnd Developer</p>
        <div className={style.buttons}>
          <button
            onClick={() => {
              navigate("/projects");
            }}
            className={`${style.button} ${style.button_work}`}
          >
            My works
          </button>
          <button
            onClick={() => {
              navigate("/contact");
            }}
            className={`${style.button} ${style.button_contact}`}
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
