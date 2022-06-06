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
    setShowReviewForm(false);
  })
}

  //const foundEvent = data.find((event) => event.id === id)
  return (
    <div className='Details_Container'>
      <h1>{eventById?.title}</h1>
    <div className="Details_SideBySide_Container">
      <img className='Details_img' src={eventById?.performers![0].image}></img>
      <main className ='EventDetails'>
          <p>This event is a {eventById?.type} event.</p>
          <p>The venue is at {eventById?.venue?.name} and has a max capacity of {eventById?.venue?.capacity}.</p> 
          <p>The event will be at {eventById?.venue?.address}, {eventById?.venue?.city}, {eventById?.venue?.state}, {eventById?.venue?.country} {eventById?.venue?.postal_code}.</p>
          <ul>Performers included at event:</ul>
          {eventById?.performers?.map((info, i)=> 
          <li>{info.name}</li>)}
        <a href={eventById?.url}>
        <button className="Details_Btn" >Get your tickets with Seat Geek here!</button> 
        </a>
      </main>
       
     </div>
     
     <section className="Details_ReviewSection">
      <h2 className="Details_ReviewSectionTitle">Event Reviews</h2>
      <button className="Details_Btn" onClick= {() => setShowReviewForm(true)}>Leave A Review!</button>
        {showReviewForm &&
              <UserReviewForm onSubmit={addReview}/>}
        {reviews.map((eventReview, i)=> 
              <SingleUserReview review={eventReview}/>
          )}
    </section>
    </div>
  )
}

