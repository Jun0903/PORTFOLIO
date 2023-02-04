import { useEffect } from "react";
import Explorer from "./components/Explorer";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <SideBar />
      <Explorer />
      <Home />
    </div>
  );
}

export default App;
