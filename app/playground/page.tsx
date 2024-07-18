"use client";

import { useEffect, useState } from "react";
import MyComponent from "./components/MyComponent";
import axios from "axios";
import UserFoto from "./components/userFoto";

const Playground = () => {
  const [userData, setUserData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/form");
        setUserData(response.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" mx-auto flex max-w-7xl flex-col items-center">
      <h1 className="text-3xl mb-10">Playground page:</h1>
      <div className=" m-3 w-[80%] border-2 rounded-2xl flex items-center justify-center min-h-72">
        <MyComponent />
      </div>
      <hr className="my-8" />
      <div >
        <ul role="list" className="grid grid-cols-3 gap-3 w-full">
          {userData.map((data) => (
            <li key={data.id}>
              <UserFoto
                name={data.name}
                imageSrc={data.imageSrc}
                phoneNumber={data.phoneNumber}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Playground;
