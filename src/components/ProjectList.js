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
          {project.copy === "personal" ? "🙋🏻‍♂️" : "🏢"} {project.copy}
        </div> */}
      </div>
      <div className={style.list_content}>
        <h4 className={style.list_title}>{project.name}</h4>
        <p className={style.list_desc}>{project.description}</p>
        {/* map으로 파라미터 item idx 받는 이유, 배열 렌더링으로의 이유 -> 다른 곳에서 만든 목데이터의 배열을 받아오기에 필요 */}
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
            title="새창으로 열기"
          >
            회고록
          </a>
        )}
        {/* {project.carrer && (
          <a
            className={style.career}
            href={project.career}
            target="_blank"
            rel="noopener noreferrer"
          >
            프로젝트 기술서
          </a>
        )} */}
        <div className={style.link_wrap}>
          {project.code && (
            <a
              className={style.code}
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              title="새창으로 열기"
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
              title="새창으로 열기"
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
