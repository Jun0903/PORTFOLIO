import { useEffect } from "react";
import CommonPage from "./components/CommonPage";
import "./styles/global.css";
import "./styles/theme.css";

//다크 모드를 구현하기 위함
function App() {
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);
  return (
    <div className="App">
      <CommonPage />
    </div>
  );
}

export default App;
