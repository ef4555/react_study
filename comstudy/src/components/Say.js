import React, { useState } from "react";
import "./Color.css";

const Say = () => {
  const [enterCounter, setEnterCounter] = useState(0);
  const onEnterIncrease = () => {
    setEnterCounter((prevCount) => prevCount + 1);
  };
  const [exitCounter, setExitCounter] = useState(0);
  const onExitIncrease = () => {
    setExitCounter((prevCount) => prevCount + 1);
  };

  const [message, setmessage] = useState("입구컷");
  const onClickEnter = () => setmessage("안녕");
  const onClickexit = () => setmessage("안녕히가세요");
  const [textcolor, setcolor] = useState("black");
  const [gasa, setgasa] = useState("sss");
  const buttondesign = {
    height: "50px",
    width: "50px",
    borderRadius: "100px",
  };

  return (
    <div>
      <button
        onClick={() => {
          onClickEnter();
          onEnterIncrease();
        }}
      >
        입장
      </button>
      <button
        onClick={() => {
          onClickexit();
          onExitIncrease();
        }}
      >
        퇴장
      </button>
      <h2> 입장 인원 : {enterCounter} </h2>
      <h2> 퇴장 인원 : {exitCounter} </h2>
      <h1>이무진</h1>
      <h1 style={{ color: textcolor }}>{message}</h1>
      <h2 style={{ color: textcolor }}> {gasa} </h2>
      <button
        className="redback"
        style={buttondesign}
        onClick={() => {
          setcolor("red");
          setgasa("붉은색~~");
        }}
      ></button>
      <button
        className="blueback"
        style={buttondesign}
        onClick={() => {
          setcolor("blue");
          setgasa("푸른색~~");
        }}
      ></button>
      <button
        className="yellowback"
        style={buttondesign}
        onClick={() => {
          setcolor("yellow");
          setgasa("그 사이 3초 그 짧은 시간~~~");
        }}
      ></button>
    </div>
  );
};

export default Say;
