import React from "clicky/node_modules/react";
import "/src/components/header/header.css";

const header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default header;