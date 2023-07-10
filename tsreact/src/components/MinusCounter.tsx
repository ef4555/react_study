import React, { useState } from "react";

type Props = {
  countNum: number;
};

const Counter = (props: Props) => {
  const [count, setCount] = useState<number>(props.countNum);
  const [message, setMessage] = useState<string>("bbbb");
  const Decrease = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const change = () => {
    setMessage((m) => m + "a");
  };
  return (
    <div>
      <h1>
        {count} <button onClick={Decrease}>감소시키기</button>
      </h1>
      <p>
        {message}{" "}
        <button
          onClick={() => {
            Decrease();
            change();
          }}
        >
          감소시키기
        </button>
      </p>
    </div>
  );
};

export default Counter;
