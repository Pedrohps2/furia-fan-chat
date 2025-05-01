import React, { useState } from "react";
import "../styles/Schedule.css";

const mockGames = [
  { date: "2025-05-05", teams: "FURIA vs MIBR", time: "14:00 (BRT)" },
  { date: "2025-05-09", teams: "FURIA vs Na'Vi", time: "18:30 (BRT)" },
  { date: "2025-05-12", teams: "FURIA vs Liquid", time: "20:00 (BRT)" },
  { date: "2025-05-15", teams: "FURIA vs Astralis", time: "16:00 (BRT)" }
];

const Schedule = () => {
  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const [selectedGame, setSelectedGame] = useState(null);
  const [clickedDate, setClickedDate] = useState(null);

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div className="empty-day" key={`empty-${i}`} />);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      const dateStr = currentDate.toISOString().split("T")[0];
      const game = mockGames.find(g => g.date === dateStr);

      days.push(
        <div
          key={i}
          className={`calendar-day ${game ? "game-day" : ""}`}
          onClick={() => {
            setSelectedGame(game || null);
            setClickedDate(dateStr);
          }}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  const changeMonth = (delta) => {
    let newMonth = month + delta;
    let newYear = year;

    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    } else if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }

    setMonth(newMonth);
    setYear(newYear);
    setSelectedGame(null);
    setClickedDate(null);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="navigate-month" onClick={() => changeMonth(-1)}>◀</button>
        <div className="calendar-title">
          {new Date(year, month).toLocaleString("default", { month: "long", year: "numeric" })}
        </div>
        <button className="navigate-month" onClick={() => changeMonth(1)}>▶</button>
      </div>

      <div className="calendar-days">
        {renderCalendar()}
      </div>

      {clickedDate && (
        <div className="game-details">
          {selectedGame ? (
            <>
              <h3>Jogo de CS:GO</h3>
              <p><strong>Data:</strong> {selectedGame.date}</p>
              <p><strong>Times:</strong> {selectedGame.teams}</p>
              <p><strong>Horário:</strong> {selectedGame.time}</p>
            </>
          ) : (
            <>
              <h3>Informações</h3>
              <p><strong>Data:</strong> {clickedDate}</p>
              <p>Não haverá jogo neste dia.</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Schedule;
