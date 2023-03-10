import style from "./../styles/ProjectList.module.css";

const ProjectList = ({ project }) => {
  return (
    <div className={style.list}>
      <div className={style.img_wrap}>
        <img
          className={style.list_img}
          src={project.image}
          alt={project.description}
        />
        {/* <div className={style.copy_tag}>
          {project.copy === "personal" ? "ðð»ââï¸" : "ð¢"} {project.copy}
        </div> */}
      </div>
      <div className={style.list_content}>
        <h4 className={style.list_title}>{project.name}</h4>
        <p className={style.list_desc}>{project.description}</p>
        {/* mapì¼ë¡ íë¼ë¯¸í° item idx ë°ë ì´ì , ë°°ì´ ë ëë§ì¼ë¡ì ì´ì  -> ë¤ë¥¸ ê³³ìì ë§ë  ëª©ë°ì´í°ì ë°°ì´ì ë°ìì¤ê¸°ì íì */}
        <div className={style.tags_wrap}>
          {project.tags.map((item, idx) => {
            return (
              <span className={`${style.skills}`} key={idx}>
                #{item}
              </span>
            );
          })}
        </div>
        {project.memo && (
          <a
            className={style.memo}
            href={project.memo}
            target="_blank"
            rel="'noopener noreferrer"
            title="ìì°½ì¼ë¡ ì´ê¸°"
          >
            íê³ ë¡
          </a>
        )}
        {/* {project.carrer && (
          <a
            className={style.career}
            href={project.career}
            target="_blank"
            rel="noopener noreferrer"
          >
            íë¡ì í¸ ê¸°ì ì
          </a>
        )} */}
        <div className={style.link_wrap}>
          {project.code && (
            <a
              className={style.code}
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              title="ìì°½ì¼ë¡ ì´ê¸°"
            >
              Github
            </a>
          )}
          {project.demo && (
            <a
              className={style.demo}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              title="ìì°½ì¼ë¡ ì´ê¸°"
            >
              Youtube
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
