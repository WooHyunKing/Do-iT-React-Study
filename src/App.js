import { useEffect, useState } from "react";
import SubjectBox from "./components/SubjectBox";
import ToDoList from "./components/ToDoList";
import Timer from "./components/Timer";

function App() {
  const [name, setName] = useState("킹우현");
  const [age, setAge] = useState(25);
  const [show, setShow] = useState(false);

  // 렌더링 될 때마다 실행됨(componentDidMount + 모든 State에 대해 componentDidUpdate)
  useEffect(() => {
    console.log("렌더링 🎨");
  });

  // // 최초 렌더링(마운트) + age가 변화할 때마다 실행됨(componentDidMount + 특정 값 componentDidUpdate)
  useEffect(() => {
    console.log("age 변화 🕓");
  }, [age]);

  // // 최초 렌더링(마운트) + name이 변화할 때마다 실행됨(componentDidMount + 특정 값 componentDidUpdate)
  useEffect(() => {
    console.log("name 변화 ✨");
  }, [name]);

  // // 최초 렌더링 시에만 실행됨(componentDidMount)
  useEffect(() => {
    console.log("첫 렌더링(Mount) ⭐️");
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>이름 : {name}</span>
      <span>나이 : {age}</span>

      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setAge((prev) => prev + 1)}>나이 먹이기</button>
      </div>

      {show ? <Timer /> : null}
      <button onClick={() => setShow(!show)}>타이머 렌더링/제거</button>
    </div>
  );
}

export default App;
