import React, { useState, useEffect } from "react";
import "./SideBar.css";

function Sidebar() {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    fetch("https://apiv2.game4.co/api/competitions/popular")
      .then((response) => response.json())
      .then((data) => {
        setLeagues(data.slice(0, 10)); // only the first 10
      });
  }, []);

  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const clearSearch = () => {
    setSearchText("");
  };

  return (
      <aside className="sidebar">
        <div className="search-competitions">
          <div className="search-competitions__form">
            <input
              type="text"
              placeholder="Search League or Event"
              value={searchText}
              onChange={handleChange}
            />
            {searchText ? (
              <i className="x icon" onClick={clearSearch}></i>
            ) : (
              <i className="search icon"></i>
            )}
          </div>
        </div>
        <div className="league-list">
          <div className="league-list__label caption">Popular leagues</div>
          {leagues.map((league) => (
            <div key={league.competition_id} className="league_items">
              <img
                src={league.competition.logo}
                alt={league.competition.name}
                className="league_img"
                width="20"
                height="20"
              />
              <p className="league_name">
                {league.competition.name_th ||
                  league.competition.short_name ||
                  league.competition.name}
              </p>
            </div>
          ))}
        </div>
      </aside>
  );
}
export default Sidebar;
