import React from "react";
import "./MainContent.css";
import Sidebar from "../SideBar/SideBar";
import MatchList from "../MatchList/MatchList";
import AsideContent from "../AsideContent/AsideContent";

function MainContent() {
  return (
    <div className="container">
      <Sidebar />
      <div className="content-wrapper">
        <div className="content react">
          <main className="content-inner">
            <MatchList />
          </main>
          <AsideContent />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
