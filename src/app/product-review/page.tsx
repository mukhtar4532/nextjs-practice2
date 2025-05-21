import { Suspense } from "react";
import Product from "../components/Product";
import Review from "../components/Review";

export default function ProductReview() {
  return (
    <div>
      <h2>Product Review</h2>
      <Suspense fallback="Products Loading...">
        <Product />
      </Suspense>
      <Suspense fallback="Review Loading...">
        <Review />
      </Suspense>
    </div>
  );
}
