"use client";

import MyComponent from "./components/MyComponent";

const Playground = () => {
  return (
    <div className=" mx-auto flex max-w-7xl flex-col items-center">
      play ground page
      <div className=" m-3 w-[80%] border-2 rounded-2xl flex items-center justify-center min-h-72">
        <MyComponent />
      </div>
    </div>
  );
};

export default Playground;
