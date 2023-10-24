import React from "react";
import reviewsData from "../../assets/data/reviewData";
import ProductReview from "../../../types/review";
import "./css/index.css";
import { Rating } from "@mui/material";

function Review({ reviewNumber }: { reviewNumber: number }) {

    // const reviews: ProductReview[] = reviewsData.data.reviews;
    // console.log(reviews);

    const review: ProductReview = reviewsData.data.reviews[reviewNumber];


    return (
        <div className="review-div d-flex">
            {/* <div className="review-user">{review.user}</div> */}
            <Rating
                name="half-rating-read"
                value={parseFloat(review.rating)}
                precision={0.5}
                readOnly
                size="large"
            />
            <div className="review-title">{review.title}</div>
            <div className="review-text">{review.reviewText}</div>
        </div>
    );
}

export default Review;