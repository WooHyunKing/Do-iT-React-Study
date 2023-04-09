import React from "react";

const ToDoList = (props) => {
  return (
    <div style={{ border: "1px solid black", width: "200px" }}>
      <h1>{props.title}</h1>
      <ul>
        <li>{props.one}</li>
        <li>{props.two}</li>
        <li>{props.three}</li>
        <li>{props.number}</li>
      </ul>
    </div>
  );
};

export default ToDoList;
