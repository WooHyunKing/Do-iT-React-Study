import React from "react";

// const BoxStyle = {
//   borderColor:
// }

// const props ={
//   number: 231312,
//   name : "정보보호",
//   code : "F101-1",
// }

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

// const SubjectBox = (props) => {
//   return (
//     <div
//       style={{
//         border: "1px solid gray",
//         padding: "10px 10px",
//         marginBottom: "10px",
//       }}
//     >
//       <h2>{props.subTitle}</h2>
//       <h1>
//         {props.subFirstName}_{props.subName}({props.subCode})
//       </h1>
//       <span>.{props.subProfessor}</span>
//     </div>
//   );
// };

export default SubjectBox;
