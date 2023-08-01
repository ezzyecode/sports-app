// MatchListSubNav.js
import React, { useState, useEffect, useRef } from "react";
import "./MatchListSubNav.css";
import { Calendar, Card } from "react-rainbow-components";
import { selectDate, fetchMatches } from "../../../redux/actions";
import { useDispatch } from "react-redux";

const MatchListSubNav = () => {
  const dispatch = useDispatch();
  const calendarContainerStyles = {
    width: "28rem",
    height: "27rem",
    position: "absolute",
    top: "40px",
    "border-radius": "19px",
    "background-color": "#f5f7f9",
    "z-index": "9999",
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const calendarRef = useRef();

  const handleClickOutside = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setIsCalendarVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDateChange = (value) => {
    console.log(value);
    setSelectedDate(value);
    setIsCalendarVisible(false);
    dispatch(selectDate(value)); // Dispatch the action here
  };

  const currentDate = new Date();

  const dates = Array.from(
    { length: 5 },
    (_, i) =>
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() - 2 + i
      )
  );

  const selectDateInComponent = (date) => {
    setSelectedDate(date);
  };

  const changeSelectedDate = (date) => {
    console.log(date);
    setSelectedDate(date);
    dispatch(selectDate(date)); // Dispatch the action here
    dispatch(fetchMatches(date)); // Fetch new matches
  };

  return (
    <div className="match-list-sub-nav">
      <div className="match-list-filter-buttons">
        <button type="button" className="btn-filter">
          <i className="btn-filter__icon podcast icon"></i>
          <span className="live_text">Live</span>
          <span className="btn__label bg-danger">98</span>
        </button>
        <button className="btn-filter">
          <i className="btn-filter__icon clock outline icon"></i>
          <i className="btn-filter__icon icon-time">By Time</i>
        </button>
      </div>
      <div className="match-list-date-picker">
        <ul className="nav-calendar-desktop m-0">
          {dates.map((date, index) => (
            <li
              key={index}
              className={`nav-calendar-desktop__item ${
                date.getDate() === selectedDate.getDate() ? "active" : ""
              }`}
              onClick={() => changeSelectedDate(date)} // Change here
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="">
                {date.getDate()}{" "}
                <span>
                  {date.toLocaleDateString("default", { weekday: "short" })}
                </span>
              </a>
            </li>
          ))}
          <li ref={calendarRef} className="nav-calendar-desktop__item">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a onClick={() => setIsCalendarVisible(!isCalendarVisible)}>
              <i className="calendar outline icon"></i>
            </a>
            {isCalendarVisible && (
              <Card
                style={calendarContainerStyles}
                className="rainbow-p-around_large"
              >
                <Calendar
                  className="calendar_select"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </Card>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MatchListSubNav;
