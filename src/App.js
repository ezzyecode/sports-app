import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import HeaderDesktop from "./components/Header/HeaderDesktop";
import HeaderMobile from "./components/Header/HeaderMobile";
import SubHeader from "./components/SubHeader/SubHeader";
import BreadcrumbBar from "./components/BreadcrumbBar/BreadcrumbBar";
import MainContent from "./components/MainContent/MainContent";
import "./App.css";
import "./AppIcon.css";

const DesktopWrapper = ({ children }) => (
  <div className="wrapper is-desktop">
    <div className="wrapper__inner">{children}</div>
  </div>
);

const MobileWrapper = ({ children }) => (
  <div className="wrapper is-mobile">{children}</div>
);

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <DesktopWrapper>
          <HeaderDesktop />
          <SubHeader />
          <BreadcrumbBar />
          <MainContent />
        </DesktopWrapper>
        <MobileWrapper>
          <HeaderMobile />
        </MobileWrapper>
      </div>
    </Provider>
  );
}

export default App;
