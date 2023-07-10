import React, { useState } from "react";

type Props = {
  countNum: number;
};

export default function PlusCounter(props: Props) {
  const [count, setCount] = useState<number>(props.countNum);
  const Increase = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      {count} <button onClick={Increase}>증가시키기</button>
    </div>
  );
}
