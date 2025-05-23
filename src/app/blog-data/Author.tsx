export default async function Author({ userId }: { userId: string }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const author = await response.json();

  return <h2>Author: {author.name}</h2>;
}
