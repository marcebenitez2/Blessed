import { Route, Switch } from "wouter";
import Home from "./pages/homePage/home";
import Error from "./pages/error/error";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [sidebarOpen, setSidebarOpen] = useState(
    windowWidth > 768 ? true : false
  );

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    console.log(sidebarOpen)
  }, [sidebarOpen]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar toggleSidebar={toggleSidebar} />
      <div style={{ display: "flex" }}>
        {sidebarOpen && <Sidebar />}
        <div className="main">
          <Switch>
            <Route path="/" component={Home}></Route>
            <Route component={Error}></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
