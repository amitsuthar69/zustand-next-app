"use client";
import { getSomeData } from "@/utils/apiroute";
import { useState } from "react";

export default function ApiRoute() {
  const [data, setData] = useState([]);
  const fetchSomeData = async (e) => {
    e.preventDefault();
    const myData = await getSomeData();
    setData(myData);
  };
  return (
    <main>
      <div>Testing Api route</div>
      <button onClick={fetchSomeData}>Click me</button>
      {data && data.map((item) => <div>{item.id}</div>)}
    </main>
  );
}
