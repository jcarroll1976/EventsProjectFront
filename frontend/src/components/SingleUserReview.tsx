import { Review } from "../models/eventModels";
import "./SingleUserReview.css";

interface Props {
    review:Review
}

export default function SingleUserReview({review}:Props){
    return (
        <div className="SingleUserReview">
            <h3>Title: {review.title}</h3>
            <p>Reviewed by: {review.name}</p>
            <p>Review: {review.review}</p>
        </div>
    )
}

