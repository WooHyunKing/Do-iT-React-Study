import { useState } from "react";
import SubjectBox from "./\bcomponents/SubjectBox";
import ToDoList from "./\bcomponents/ToDoList";

function App() {
  const information = {
    name: "Woohyun",
    age: 25,
  };

  const [count, setCount] = useState(0);
  const [info, setInfo] = useState(information);
  const clickButton = () => {
    setCount(count + 1);
  };
  const addAge = () => {
    // 잘못된 방법
    // setInfo((current) => {
    //   current.age += 1;
    //   return current;
    // });

    // 올바른 방법
    setInfo((current) => {
      const newInfo = { ...current };
      newInfo.age += 1;
      return newInfo;
    });
  };

  console.log("렌더링 되었습니다 !");

  return (
    <div>
      <div>
        <p>버튼을 {count}번 눌렀습니다.</p>
        <button onClick={clickButton}>클릭</button>

        <h1>
          My name is {info.name} and my age is {info.age}
        </h1>
        <button onClick={addAge}>나이 먹이기</button>
      </div>
    </div>
  );
}

export default App;
