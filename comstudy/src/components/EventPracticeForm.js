import React, { useState } from "react";

const EventPracticeForm = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사하고
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습(폼)</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        onChange={onChange}
        value={username}
      />
      <br />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력"
        onChange={onChange}
        value={message}
        onKeyDown={onKeyDown}
      />
      <br />
      <button onClick={onClick}>확인 버튼</button>
    </div>
  );
};

export default EventPracticeForm;
