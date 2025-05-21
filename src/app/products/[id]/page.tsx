export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <h1>Time: {new Date().toLocaleTimeString()}</h1>
      <div>Product Details {id}</div>
    </>
  );
}
