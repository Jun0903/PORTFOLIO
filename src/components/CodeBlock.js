import style from "../styles/CodeBlock.module.css";

// 파라미터로 children 받게 된다면?
const CodeBlock = ({ children }) => {
  return <div className={style.codeblock}>{children}</div>;
};

export default CodeBlock;
