import { serverFun } from "../utils/server-lib";

export default function Server() {
  console.log("Server compnent");
  const res = serverFun();
  return <h2>Server Page - {res}</h2>;
}
