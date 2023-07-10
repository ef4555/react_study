import React, { useState } from "react";

const EventPractice = () => {
  const [message, setmessage] = useState("");

  const handleInputChange = (e) => {
    setmessage(e.target.value);
    console.log(e.target.value);
  };

  const handleButtonClick = () => {
    alert(message);
    setmessage("");
  };

  return (
    <div>
      <h1>이벤트 실습</h1>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력"
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleButtonClick();
          }
        }}
        value={message}
      />
      <button onClick={handleButtonClick}>확인 버튼</button>
      <h2>{message}</h2>
    </div>
  );
};

export default EventPractice;
