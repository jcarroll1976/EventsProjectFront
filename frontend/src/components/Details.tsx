import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import './Details.css';
import { fetchEventById, getEventReviews, postUserReview, putUserReview } from '../service/EventApiService';
import { Event, Review } from '../models/eventModels';
import UserReviewForm from './UserReviewForm';
import SingleUserReview from './SingleUserReview';
import AuthContext from '../context/AuthContext';
// whenever a user clicks details button link to this page



export default function Details(){
  const id = Number(useParams().id);
  const [eventById, setEventById] = useState<Event|null>(null);
  const [showReviewForm,setShowReviewForm]=useState(false);
  const [reviews,setReviews] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(()=>{
    fetchEventById(id).then(data=>{
        setEventById(data);
    })
}, []);

function addReview(review:Review):void{
  let newReview = {
    title:review.title,
    name:review.name,
    review:review.review,
    userId:user?.uid

  }
  getEventReviews(review.eventId!).then(data =>{
    if(data){
      putUserReview(review.eventId!, review)
    } else {
      postUserReview(userReview)
    }
  })
}

  //const foundEvent = data.find((event) => event.id === id)
  return (
    <div className='Details'>
    <h1>{eventById?.title}</h1>
    <img src={eventById?.performers![0].image}></img>
    <p>This event is a {eventById?.type} event.</p>
    <p>The venue is at {eventById?.venue?.name} and has a max capacity of {eventById?.venue?.capacity}.</p> 
    <p>The event will be at {eventById?.venue?.address}, {eventById?.venue?.city}, {eventById?.venue?.state}, {eventById?.venue?.country} {eventById?.venue?.postal_code}.</p>
    <ul>Performers included at event:</ul>
    {eventById?.performers?.map((info, i)=> 
    <li>{info.name}</li>)}
     <div/>
     <button>Save</button>
     <button>Share</button>
     <button onClick= {() => setShowReviewForm(true)}>Leave A Review!</button>
     {showReviewForm &&
     <UserReviewForm onSubmit={addReview}/>}
     <div/>
     <a href={eventById?.url}>
     <button>Get your tickets with Seat Geek here!</button> 
     </a>
     <div/>
     <Link to={`/Login`}>
       <button>Back to the main menu</button>
     </Link>
    </div>
  )
}
//be able to link back to the last page
