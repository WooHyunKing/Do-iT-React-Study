import React, { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는중.. ⏰");
    }, 1000); // 1초(1000ms)마다 콜백 함수 실행

    return () => {
      // 컴포넌트 제거(Unmount)시 실행
      clearInterval(timer); // 타이머 취소
      console.log("타이머가 종료되었습니다.");
    };
  }, []); // 최초 렌더링 시에만 실행

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 확인하세요 ! </span>
    </div>
  );
};

export default Timer;
