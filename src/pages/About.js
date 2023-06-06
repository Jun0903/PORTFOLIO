import CodeBlock from "../components/CodeBlock";
import CodeLine from "../components/CodeLine";
import TagContent from "../components/TagContent";
import { TagClose, TagOpen } from "../components/Tag";

import CircleSvg from "../icons/CircleIcon";
import style from "../styles/About.module.css";

//indent 는 들여쓰기 의 속성이다.
const About = () => {
  return (
    <>
      <div className={style.circle}>
        {/* <img className={style.img} /> */}
        <div className={style.circle_text}>
          <CircleSvg
            className={style.cirlce_svg}
            width={"80%"}
            height={"80%"}
          />
        </div>
      </div>

      {/* .attr()은 HTML의 속성을 취급한다, HTML attribute 값이 모두 string으로 넘어온다 */}
      <CodeBlock>
        <CodeLine>
          <TagOpen tagname={"html"} attr={"lang"} attrValue={'"ko"'} />
        </CodeLine>

        <CodeLine>
          <TagOpen tagname={"head"} indent={2} />
        </CodeLine>

        <CodeLine>
          <TagOpen tagname={"title"} indent={3} />
        </CodeLine>

        <CodeLine>
          <TagContent indent={4}>
            안녕하세요, 저는 프론트엔드 개발자를 꿈꾸는 장태준 입니다.{" "}
          </TagContent>
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"title"} indent={3} />
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"head"} indent={2} />
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagOpen tagname={"body"} indent={2} />
        </CodeLine>

        <CodeLine>
          <TagOpen
            tagname={"header"}
            attr={"class"}
            attrValue={'"자기소개"'}
            indent={3}
          />
        </CodeLine>

        <CodeLine>
          <TagContent indent={4}>
            안녕하세요! 🙇‍♂️ <br />
            저는 웹 브라우저와 프론트엔드 개발에 흥미를 느끼는 <br />
            주니어 프론트엔드 개발자 장태준 입니다.
          </TagContent>
        </CodeLine>

        <CodeLine>
          <TagContent indent={4}>
            <br />
            막연한 꿈 없이 그저 남들과 비슷하게 보이기 위해 적성과 맞지 않는
            대학을 다니다, 현재의 프론트엔드 개발자라는 꿈을 가지게 되었습니다.{" "}
            <br />
            이 길이 맞는지 방황을 많이 하였지만 기본 개념부터 차근히 쌓기 위해,
            강의 및 관련 서적을 꾸준히 읽으려 노력하고 있습니다. <br />
          </TagContent>
        </CodeLine>

        <CodeLine>
          <TagContent indent={4}>
            <br />
            처음 개발을 접했을 때는 막연히 코드만 잘 짜면 된다는 생각에 사로
            잡혔지만, <br />
            팀으로 여러 사람들과 함께 진행되는 프로젝트를 진행해 보면서, <br />
            단순히 혼자만의 힘이 아닌 다수의 지성과 의사소통을 통해 만족 할 수
            있는 결과물이 나온다는 것을 깨달아 내 자신의 성격 변화를 이루려
            노력합니다. <br />
          </TagContent>
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"header"} indent={3} />
        </CodeLine>

        <CodeLine />

        <CodeLine>
          <TagOpen
            tagname={"main"}
            attr={"class"}
            attrValue={'"기술과 경험, 그리고 공부중인 것들"'}
            indent={3}
          />
        </CodeLine>

        <CodeLine>
          <TagContent indent={5}>
            <h4>💻 사용 기술과 경험</h4>
          </TagContent>
        </CodeLine>

        <CodeLine>
          <TagContent indent={6}>
            <dl>
              <dt>
                <em>HTML & CSS</em>
              </dt>
              <dd>- 크로스브라우징 & 시맨틱 마크업을 준수합니다.</dd>
              <dd>- 반응형 / 적응형 개발 경험이 있습니다.</dd>
              <dd>- 애니메이션 속성을 이용할 수 있습니다.</dd>
              <dd>- 기본적인 css 이용법을 알고있습니다.</dd>
              <dd></dd>
            </dl>
          </TagContent>
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagContent indent={6}>
            <dl>
              <dt>
                <em>SCSS</em>
              </dt>
              <dd>- css를 컴포넌트화 하여 모듈 형태로 개발할 수 있습니다.</dd>
              <dd>- 함수와 조건문을 사용할 수 있습니다.</dd>
              <dd>
                - Mixmin를 확장성 있게 개발하여 재사용성을 높일 수 있습니다.
              </dd>
            </dl>
          </TagContent>
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagContent indent={6}>
            <dl>
              <dt>
                <em>Javascript</em>
              </dt>
              <dd>- 자바스크립트의 기본적인 문법에 대해 이해하고 있습니다.</dd>
              <dd>- 함수를 만들어 사용하고 인자를 전달할 수 있습니다.</dd>
              <dd>
                -배열과 객체 문법에 대해서 이해하고 메서드를 사용해 봤습니다.
              </dd>
              <dd>
                - 로컬스토리지를 활용하여 토이프로젝트를 개발한 경험이 있습니다.
              </dd>
              <dd>- </dd>
            </dl>
          </TagContent>
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagContent indent={6}>
            <dl>
              <dt>
                <em>React</em>
              </dt>
              <dd>- 리액트 프로젝트 경험이 있습니다.</dd>
              <dd>- 기본 문법에 대한 이해가 있습니다.</dd>
              <dd>
                - Router를 이용한 SPA 개발 경험이 있고, 조건에 따라 컴포넌트를
                분기 처리 할 수 있습니다.
              </dd>
              <dd>
                - 로컬스토리지를 저장한 데이터를 불러와 컴포넌트에 바인딩한
                경험이 있습니다.
              </dd>
              <dd>- 함수형 컴포넌트를 만들어 props 전달이 가능합니다.</dd>
              <dd>- 라이브러리 이용이 가능합니다. ex.) moment라이브러리</dd>
              <dd>
                - 데이터를 불러오는데 fetch문 뿐만이 아니라 axios를 통해서도
                불러 올 수 있습니다.
              </dd>
              <dd>- 반응형 웹 개발을 해 본 경험이 있습니다.</dd>
            </dl>
          </TagContent>
        </CodeLine>
        <CodeLine />
        <CodeLine>
          <TagContent indent={6}>
            <dl>
              <dt>
                <em>Typescript</em>
              </dt>
              <dd>
                - 객체의 타입을 명확하게 정의하기 위해 interface로 구현 할 수
                있습니다.
              </dd>
              <dd>
                - 한 타입 보다는 여러 타입에서 동작하는 컴포넌트를 만들기 위해서
                제너릭을 생성 할 수 있습니다.
              </dd>
              <dd>- 오픈 소스를 가져와서 API 적용 할 수 있습니다.</dd>
              <dd>
                - typescript 개인 프로젝트에서 darkmode 적용을 해보았습니다.
              </dd>
            </dl>
          </TagContent>
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"main"} />
        </CodeLine>

        <CodeLine />
        <CodeLine />

        <CodeLine>
          <TagOpen
            tagname={"footer"}
            attr={"class"}
            attrValue={'"학력"'}
            indent={3}
          />
        </CodeLine>

        <CodeLine>
          <TagContent indent={5}>
            <h4>📚 교육</h4>
          </TagContent>
        </CodeLine>

        <CodeLine />
        <CodeLine>
          <TagContent indent={6}>
            <dl>
              <dt>
                - 캐나다 CentennialCollege Computer Science 2학년{"("}2021.01
                입학 ~ 휴학중{")"}
              </dt>
              <dt>
                - Justcode 5기 Advanced Intensive Coding BootCamp{"("}2022.05 ~
                2022.08{")"}
              </dt>
            </dl>
          </TagContent>
        </CodeLine>
        <CodeLine />

        <CodeLine>
          <TagClose tagname={"footer"} indent={3} />
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"body"} indent={2} />
        </CodeLine>

        <CodeLine>
          <TagClose tagname={"html"} />
        </CodeLine>
      </CodeBlock>
    </>
  );
};

export default About;
