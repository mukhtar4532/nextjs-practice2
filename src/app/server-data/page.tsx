export default async function ServerData() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const userData = await response.json();

  return (
    <div>
      <h1>Server Data</h1>
      <ul>
        {userData.map((user) => (
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
