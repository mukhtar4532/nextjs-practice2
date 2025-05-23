import { Suspense } from "react";
import Author from "./Author";

type Blog = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

export default async function BlogData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogData: Blog[] = await response.json();

  return (
    <div>
      <h1>Blog Data</h1>
      <div className=" flex flex-col">
        <ul>
          {blogData.map((blog) => (
            <li
              key={blog.id}
              className=" bg-white text-black rounded-md border-b-2 border-solid border-gray-400"
            >
              <h3 className=" font-semibold">{blog.title}</h3>
              <p>{blog.body}</p>
              <div>
                <Suspense fallback={"Author Loading...."}>
                  <Author userId={blog.userId} />
                </Suspense>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
