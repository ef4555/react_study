// import React, { useState } from "react";

const StateArray = () => {
  // 객체 다루기
  // const object = { a: 1, b: 2, c: 3 };
  // const nextObject = { ...object, b: 2 }; // 객체를 다룰 땐 사본을 만들어서 b값만 덮어 쓰기

  // 배열 다루기
  const array = [
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: false },
  ];
  let nextArray = array.concat({ id: 4 }); // 새 항목 추가
  nextArray.filter((item) => item.id !== 2);
  nextArray.map((item) => (item.id === 1 ? { ...item, value: false } : item)); // id가 1인 항목의 value를 false로 설정
  // 객체에 대한 사본을 만들 때는 spread 연산자  ...를 사용하여 처리하고 배열에 대한 사본을 만들 때는 배열의 내장 함수를 활용

  return (
    <div>
      <br />
      {nextArray.map((item) => (
        <div key={item.id}>
          {item.id} {item.value}
        </div>
      ))}
    </div>
  );
};

export default StateArray;
