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
  const [reviews,setReviews] = useState<Review[]>([]);
  const {user} = useContext(AuthContext);

  useEffect(()=>{
    fetchEventById(id).then(data=>{
        setEventById(data);
    })
}, []);

function addReview(userReview:Review):void{
  let newEventReview = {
    eventID: userReview.eventId,
    review: [userReview]
  }
  getEventReviews(userReview.eventId!).then(data =>{
    if(data){
      putUserReview(userReview.eventId!, userReview).then(data=>{
        setReviews(prev=> [...prev, userReview]);
      })
    } else {
      postUserReview(newEventReview).then(data=>{
        setReviews([userReview]);
      })
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
       
     <a href={eventById?.url}>
     <button>Get your tickets with Seat Geek here!</button> 
     </a>
     
     
     <p>Event Reviews</p>
     <button onClick= {() => setShowReviewForm(true)}>Leave A Review!</button>
      {showReviewForm &&
            <UserReviewForm onSubmit={addReview}/>}
      {reviews.map((eventReview, i)=> 
            <SingleUserReview review={eventReview}/>
        )}

    </div>
  )
}

