import style from "./../styles/TagContent.module.css";

//props가 왜 들어가는지 이해해 보자.
const TagContent = (props) => {
  return (
    <div
      className={style.tag_contents}
      style={{ paddingLeft: `${props.indent * 0.5}em` }}
    >
      {props.children}
    </div>
  );
};

export default TagContent;
