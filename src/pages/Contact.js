import EmailForm from "../components/emailForm";
import CodeLine from "../components/CodeLine";
import CodeBlock from "../components/CodeBlock";
import style from "./../styles/Contact.module.css";

const Contact = () => {
  const socialItems = [
    {
      social: "email",
      link: "jangtaejun0903@gmail.com",
      href: "mailto:jangtaejun0903@gmail.com",
    },
    {
      social: "github",
      link: "Jun0903",
      href: "https://github.com/Jun0903",
    },
    {
      social: "instagram",
      link: "jang_taejun",
      href: "",
    },
    {
      social: "blog",
      link: "병아리 개발자",
      href: "https://velog.io/@taja0903",
    },
    {
      social: "notion",
      link: "taejunjang notion",
      href: "https://www.notion.so/ea2238885d2a4d3ab105139b187b62e5",
    },
  ];

  return (
    <>
      <h2 className={style.contact_title}>제게 연락주세요! ✋</h2>
      <div className={`${style.contact_item}`}>
        <CodeBlock>
          <CodeLine>
            <span className={style.socials}>소셜네트워크</span> {"{"}
          </CodeLine>
          {socialItems.map((item, idx) => {
            return (
              <CodeLine key={idx}>
                <span className={style.social_item}>{item.social}:</span>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="새창으로 열기"
                >
                  {item.link}
                </a>
                <span>;</span>
              </CodeLine>
            );
          })}
          <CodeLine>{"}"}</CodeLine>
        </CodeBlock>
      </div>
      <div className={`${style.contact_item}`}>
        <EmailForm />
      </div>
    </>
  );
};

export default Contact;
