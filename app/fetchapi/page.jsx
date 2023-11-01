"use client";
import { useState } from "react";
import { fetchPhotos } from "@/utils/photos";

export default function FetchApi() {
  const [fetchedData, setfetchedData] = useState([]);
  const getData = async () => {
    try {
      const fetchedPhotos = await fetchPhotos();
      setfetchedData(fetchedPhotos);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <div>Fetch Api</div>
      <button onClick={getData}>Click Me</button>
      {fetchedData &&
        fetchedData.map((data) => (
          <div>
            <h2>{data.title}</h2>
          </div>
        ))}
    </main>
  );
}
