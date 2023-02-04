import { useNavigate, useLocation } from "react-router-dom";

import FileIcon from "../icons/FileIcon";
import SearchIcon from "../icons/SearchIcon";
import PencilIcon from "../icons/PencilIcon";
import MailIcon from "../icons/MailIcon";

import AccountIcon from "../icons/AccountIcon";
import SettingIcon from "../icons/SettingIcon";

import style from "../styles/SideBar.module.css";

const sideTopItems = [
  {
    Icon: FileIcon,
    path: "/",
  },
  {
    Icon: SearchIcon,
    path: "/projects",
  },
  {
    Icon: PencilIcon,
    path: "/blog",
  },
  {
    Icon: MailIcon,
    path: "/contact",
  },
];

const sideDownItems = [
  {
    Icon: AccountIcon,
    path: "/about",
  },
  {
    Icon: SettingIcon,
    path: "/setting",
  },
];

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <aside className={style.sidebar}>
      <div className={style.top}>
        {sideTopItems.map(({ Icon, path }) => {
          return (
            <button
              onClick={() => {
                navigate(path);
              }}
              key={path}
            >
              <Icon
                className={style.icon}
                fill={
                  pathName === path
                    ? "rgb(255, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
              />
            </button>
          );
        })}
      </div>
      <div className={style.bottom}>
        {sideDownItems.map(({ Icon, path }) => {
          return (
            <button
              onClick={() => {
                navigate(path);
              }}
              key={path}
            >
              <Icon
                className={style.icon}
                fill={
                  pathName === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
              />
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;
