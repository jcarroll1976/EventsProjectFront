import { FormEvent, useState } from "react";
import { Review } from "../models/eventModels";



interface Props {
    onSubmit:(newReview:Review) => void;
}

function UserReviewForm({onSubmit}:Props) {
    const [title,setTitle] = useState('');
    const [name,setName] = useState('');
    const [review,setReview] = useState('');


    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const newReview:Review = {
            title:title,
            name:name,
            review:review,
            
        }
        onSubmit(newReview);
        setTitle("");
        setName("");
        setReview("");
    }
        return (
            <div className="UserReviewForm">
            <form onSubmit={handleSubmit}>
            <p>
                        <label htmlFor='UserReview_title'>Review Title</label>
                        <input id='UserReview__title' value={title}
                                onChange={e => setTitle(e.target.value)} />
                    </p>
                <p>
                        <label htmlFor='UserReview_name'>Name</label>
                        <input id='UserReview__name' value={name}
                                onChange={e => setName(e.target.value)} />
                    </p>
                    <p>
                    <label htmlFor='UserReview__review'>Enter your review</label>
                        <input id='UserReview__review' required value={review}
                                onChange={e => setReview(e.target.value)} />
                    </p>
                    <input type="submit" value="Submit Your Review"/>
            </form>
            </div>
        )

    }


export default UserReviewForm;