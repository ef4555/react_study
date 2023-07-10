import PropTypes from "prop-types";

const MyComponent = ({ name, children }) => {
  return (
    <div>
      새로운 컴포넌트 <br />
      {name}
      <br />
      {children}
      <br />
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 프롭ㅁㅁㅁㅁㅁ",
};

MyComponent.defaultProps = {
  name: PropTypes.string,

  // name 값은 무조건 문자열 형태로 전달되어야 함을 지정해줌
  // 타입 지정
};

export default MyComponent;

// import React from 'react';

// const MyComponent = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default MyComponent;

// rsc 화살표 함수형 컴포넌트
// rcc 클래스형 컴포넌트
