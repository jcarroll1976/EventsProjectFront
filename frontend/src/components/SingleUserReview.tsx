import { Review } from "../models/eventModels";
import "./SingleUserReview.css";

interface Props {
    review:Review
}

function SingleUserReview({review}:Props){
    return (
        <div className="SingleUserReview">
            <p>{review.title}</p>
            <p>Reviewed by: {review.name}</p>
            <p>{review.review}</p>
        </div>
    )
}

export default SingleUserReview