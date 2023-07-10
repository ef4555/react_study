import React from "react";

const MapPrac = () => {
  const names = ["눈사람", "얼음", "바람"];
  const nameList = names.map((name, index) => <li key={index}>{name} </li>);
  return (
    <div>
      <ul>{nameList}</ul>
    </div>
  );
};

export default MapPrac;
