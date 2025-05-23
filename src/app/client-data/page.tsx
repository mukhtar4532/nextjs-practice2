"use client";
import { useEffect, useState } from "react";

export default function ClientData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Something went wrong...");
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return <h2>Loading ...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Client Data</h1>
      <ul>
        {data.map((user) => (
          <li
            key={user.id}
            className=" bg-white text-black border border-b-gray-300"
          >
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
