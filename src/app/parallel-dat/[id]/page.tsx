async function getAllPosts(userId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return await response.json();
}

async function getAllAlbums(userId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
  return await response.json();
}

export default async function ParallelData({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const allPosts = getAllPosts(id);
  const allAlbums = getAllAlbums(id);
  const [posts, albums] = await Promise.all([allPosts, allAlbums]);

  return (
    <div>
      <h1>Parallel Data Fetching</h1>
      <div className=" flex justify-between ">
        <div className="">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white text-black p-3 m-3 w-auto rounded-md border-b-2 border-solid border-gray-300"
            >
              <h2>
                <strong>Title:</strong> {post.title}
              </h2>
              <h3>
                <strong>Body:</strong> {post.body}
              </h3>
            </div>
          ))}
        </div>
        <div>
          {albums.map((album) => (
            <div
              key={album.id}
              className="bg-white h-24 p-3 m-3 text-black w-auto rounded-md border-b-2 border-solid border-gray-300"
            >
              <h2>
                <strong>Album:</strong> {album.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
