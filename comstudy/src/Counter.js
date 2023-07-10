import React, { useState } from "react";

const Counter = () => {
  const [message, setmessage] = useState("");
  const onClickEnter = () => setmessage("안녕");
  const onClickexit = () => setmessage("안녕히가세요");
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickexit}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Counter;
