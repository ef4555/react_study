// import logo from './logo.svg' // SVG파일 불러와서 사용
import "./App.css"; // CSS 파일 불러와서 사용
// 웹팩의 loader라는 기능이 알아서 불러올 수 있게 함
// 이 코드들은 HTML이 아니고 JSX라는 별도의 코드
// 이것들을 변환해서 자스로 자동으로 해주는 뭔가가 있다..
import { Fragment } from "react";
// null은 안보이고 undefined는 오류남
// jsx 태그 안에 undefined를 감싸면 오류 안남
// false는 안보이고 0은 보임

function App() {
  const name = "최예훈님";
  const style = {
    width: 300,
  };
  const aa = {
    backgroundColor: "white",
  };
  /* style 지정 시 -지우고 camelCase로 작성해야한다. */
  return (
    <>
      <header style={aa} className="App-header">
        {/* class 대신 className */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img style={style} src="img/cjlogo.png" alt="" />
        {name || <h1>리액트입니다</h1>}
        {/* name이 있으면 name 출력 없으면 리액트입니다 출력 */}
        <h1>CJ 합격을 축하드립니당 ㅎㅎ</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          합격자 등록 링크
        </a>
      </header>
    </>
  );
}

export default App;
