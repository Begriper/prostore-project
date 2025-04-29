"use client";

import ReviewForm from "@/app/(root)/product/[slug]/review-form";
import { Review } from "@/types";
import Link from "next/link";
import { useState } from "react";

const ReviewList = ({
  userId,
  productId,
  productSlug,
}: {
  userId: string;
  productId: string;
  productSlug: string;
}) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  return (
    <div className="space-y-4">
      {reviews.length === 0 && <div>No review yet</div>}
      {userId ? (
        <>{/* REVIEW FORM HERE</> */}</>
      ) : (
        <div>
          Please
          <Link
            className="text-blue-700 px-2"
            href={`/sign-in?callbackUrl=/product/${productSlug}`}
          >
            sign in
          </Link>
          to write a review
        </div>
      )}
      <div className="flex flex-col gap-3">
        <ReviewForm userId={userId} productId={productId} />
      </div>
    </div>
  );
};

export default ReviewList;
