import React, { useLayoutEffect } from "react";
import { Row } from "react-bootstrap";
import { Navbar, Preloader, Sidebar } from "./components";
import { useStore } from "./hooks";
import Route from "./routes";
import { insertTheme } from "./services";
import { THEMES } from "./template.data";

const App = () => {
  const { setIsThemeFetching } = useStore();
  useLayoutEffect(() => {
    void (async function () {
      const theme = localStorage.getItem("theme");
      if (!theme || !THEMES.includes(theme)) {
        localStorage.setItem("theme", "default");
        return await insertTheme("default", setIsThemeFetching);
      }
      await insertTheme(theme, setIsThemeFetching);
    })();
  }, [setIsThemeFetching]);

  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="main">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="body">
            <div className="body__inner">
              <div className="navigation">
                <Navbar />
              </div>
              <div className="content">
                <Row>
                  <Route />
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Preloader />
    </React.Fragment>
  );
};

export default App;
