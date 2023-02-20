import { useState, useEffect } from "react";
import axios from "axios";
import ProjectList from "../components/ProjectList";

import style from "./../styles/Project.module.css";

const Project = () => {
  const [project, setProject] = useState(null);

  //await 들어가는 곳 => project들 받아와야 합니다.
  const getData = async () => {
    try {
      const result = await axios.get(
        "https://raw.githubusercontent.com/Jun0903/PORTFOLIO-API/main/src/portfolio-api/project.json"
      );
      console.log("get data");
      setProject(result.data);
    } catch (error) {
      console.log("Data failed" + error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2 className={style.project_title}>My Works!</h2>
      <div className={style.container}>
        {project &&
          project.map((item, idx) => {
            return <ProjectList project={item} key={idx} />;
          })}
      </div>
    </>
  );
};

export default Project;
