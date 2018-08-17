import React from "react";
import "./Panel.css";

const Panel = props => (
      <div onClick={() => (
        console.log(props.name),
        props.whenClicked(props.id)
        )} className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    );
export default Panel;