import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
  <div>
    <div className="currentScore">
      Current Score: {props.current}
    </div>
    <div className="highScore">
      High Score: {props.high}
    </div>
  </div>
);

export default Scoreboard;