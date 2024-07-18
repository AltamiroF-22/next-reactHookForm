"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const MyComponent = () => {
  const [user, setUser] = useState({ name: "junior", category: "developer" });
  const [counter, setCounter] = useState<number>(100);

  const changeName = useCallback(() => {
    setUser((prevUser) => ({ ...prevUser, name: "Altamiro" }));
    console.log("name changed");
  }, []);

  const changeCategory = useCallback(() => {
    setUser((prevUser) => ({
      ...prevUser,
      category: prevUser.category === "developer" ? "QA" : "developer",
    }));
  }, []);

  const increase = () => {
    if (counter === 200) return;
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrease = () => {
    if (counter === 0) return;
    setCounter((prevCounter) => prevCounter - 1);
  };



  return (
    <div className="">
      <div className="flex gap-5">
        <button
          onClick={changeName}
          className="border border-slate-950 mb-10 rounded-full px-8 py-3 bg-slate-50 hover:bg-slate-900 transition hover:text-slate-100"
        >
          Change name
        </button>
        <button
          onClick={changeCategory}
          className="border border-slate-950 mb-10 rounded-full px-8 py-3 bg-slate-50 hover:bg-slate-900 transition hover:text-slate-100"
        >
          Change Category
        </button>
      </div>

      <div className="flex flex-col items-center px-10 text-gray-800">
        <p>Name: {user.name} </p>
        <p>Category: {user.category} </p>
      </div>
      <hr className="my-6" />
      <div className="border rounded-full mx-auto w-max flex gap-2 items-center p-1 ">
        <div
          onClick={() => increase()}
          className="px-2 select-none text-xl cursor-pointer hover:bg-slate-950 rounded-full transition hover:text-slate-50 w-10 flex items-center justify-center h-10"
        >
          +
        </div>
        <div className="select-none px-4 w-20 text-center border-x">{counter}</div>
        <div
          onClick={() => decrease()}
          className="select-none px-2 text-xl cursor-pointer hover:bg-slate-950 rounded-full transition hover:text-slate-50 w-10 flex items-center justify-center h-10"
        >
          -
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
