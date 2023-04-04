import React from "react";

// const BoxStyle = {
//   borderColor:
// }

// const SubjectBox = () => {
//   return (
//     <div style={{ border: "1px solid gray", padding: "10px 10px" }}>
//       <h2>2023U0002</h2>
//       <h1>CGEX_창업 아이디어 탐색 및 실습(X586-1)</h1>
//       <span>.정문호</span>
//     </div>
//   );
// };

const SubjectBox = (props) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px 10px",
        marginBottom: "10px",
      }}
    >
      <h2>{props.subTitle}</h2>
      <h1>
        {props.subFirstName}_{props.subName}({props.subCode})
      </h1>
      <span>.{props.subProfessor}</span>
    </div>
  );
};

export default SubjectBox;
