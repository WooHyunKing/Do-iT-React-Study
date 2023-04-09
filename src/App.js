import SubjectBox from "./\bcomponents/SubjectBox";
import ToDoList from "./\bcomponents/ToDoList";

// // 화살표 함수 사용
// const ToDoList = () => {
//   return (
//     <div style={{ border: "1px solid black", width: "200px" }}>
//       <h1>My Book</h1>
//       <ul>
//         <li>Study</li>
//         <li>Exercise</li>
//         <li>Read book</li>
//       </ul>
//     </div>
//   );
// };

// 일반 함수 사용
// const ToDoList = function () {
//   return (
//     <div style={{ border: "1px solid black", width: "200px" }}>
//       <h1>My Book</h1>
//       <ul>
//         <li>Study</li>
//         <li>Exercise</li>
//         <li>Read book</li>
//       </ul>
//     </div>
//   );
// };

// const Book = function () {
//   return {};
// };

function App() {
  return (
    <div
      style={{
        backgroundColor: "#F8F8F8",
        width: "95vw",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h1>2023년 1학기</h1>
      <SubjectBox
        subTitle="2023U002001202300"
        subFirstName="CGEX0017"
        subName="창업 아이디어 탐색 및 실습"
        subCode="X586-1"
        subProfessor="정문호"
      />
      <SubjectBox
        subTitle="2023U00020012023020921"
        subFirstName="SCE334"
        subName="정보보호"
        subCode="F054-1"
        subProfessor="손태식"
      />
    </div>
  );
}

export default App;

{
  props.number;
}
