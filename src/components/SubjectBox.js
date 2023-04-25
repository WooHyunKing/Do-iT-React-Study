import React from "react";

const SubjectBox = (props) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px 10px" }}>
      <h2>{props.number}</h2>
      <h1>
        CGEX0017_{props.name}({props.code})
      </h1>
      <span>.정문호</span>
    </div>
  );
};

export default SubjectBox;
