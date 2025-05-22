"use client";

import { useRootContext } from "../components/UserContext";

export default function Client() {
  console.log("Client compnent");
  const rootUser = useRootContext();
  return (
    <h2>
      Client Page = Name: {rootUser.name}, Email: {rootUser.email}, Age:{" "}
      {rootUser.age}
    </h2>
  );
}
