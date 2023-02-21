import style from "./../styles/Tag.module.css";

// case undefined: 어떻게 표현되는지 확인
//switch는 첫번째로 매칭되는 path를 가진 컴포넌트를 렌더링 시켜준다.
const TagOpen = (props) => {
  const attr = props.attr;
  const checkAttr = () => {
    switch (attr) {
      case undefined:
        return <span className={style.attr}>{props.attr}</span>;
      default:
        return (
          <span className={style.attr}>
            {props.attr}
            <span className={style.tagname}>{"="}</span>
          </span>
        );
    }
  };
  return (
    <div
      className={style.tag}
      style={{ paddingLeft: `${props.indent * 0.5}em` }}
    >
      {"<"}
      <span className={style.tagname}>{props.tagname}</span>
      {checkAttr()}
      <span className={style.attr_value}> {props.attrValue} </span>
      {">"}
    </div>
  );
};

const TagClose = (props) => {
  return (
    <div
      className={style.tag}
      style={{ paddingLeft: `${props.indent * 0.5}em` }}
    >
      {"</"}
      <span className={style.tagname_close}>{props.tagname}</span>
      {">"}
    </div>
  );
};

export { TagOpen, TagClose };
