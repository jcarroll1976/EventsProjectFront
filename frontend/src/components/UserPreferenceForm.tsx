import {FormEvent, useState} from 'react';
import './UserPreferenceForm.css';
import {UserPreference} from "../models/eventModels";







interface Props {
    onSubmit:(UserPreference:UserPreference) => void;
}    
    


function UserPreferenceForm() {
    const [eventType, seteventType] =useState<string[]>([]);
    const [event_size, setevent_size]= useState('');
    const [postalCode, setpostalCode]= useState('');
    const [genre, setgenre] = useState<string[]>([]);
    const [sport, setsport] = useState<string[]>([] );
   


   

    const handleOnChange = (e: any) => 
    {

       const value = e.target.value;
       const checked = e.target.checked;
       console.log(`${value} is ${checked}`);

       if(checked) {
           setgenre(prev =>[...prev,value])
       }else{
           setgenre(genre.filter(g => g!== value))
       }


    }    

    function handleSubmit() {
        
    }

    

    

    const UserPref: UserPreference = {
        postal_code: postalCode,
        taxonomies: {genre:genre},
        event_size:Number(event_size),
        eventType: eventType

        



        
        

        
    }
   // onSubmit(UserPref);
    //seteventType([]);
    //setevent_size('');
    //setpostalCode('');
    //setgenre([]);

//}

    return(
        <div className='UserPreferenceForm'>
            <form onSubmit={handleSubmit}>   
              <h1> Welcome to Event Finder   </h1 >
              <h4>PLEASE TAKE OUR QUIZ TO FIND YOUR EVENT STYLE</h4>

                <p>

                  

                    <label htmlFor='postalcode'>What is your desired location? </label>
                    <input type ="number"  placeholder = "zipcode" value = {postalCode} onChange =  {e => setpostalCode(e.target.value)} required></input>

                    <label htmlFor='type'>Which Type of Events Are You Looking For? Please select all that apply</label>
                    <input type ="checkbox" value = {eventType}/> 
                    <select>
                     <option value="Sports">Sports</option>
                     <option value="Concerts">Concerts</option>
                     <option value="Comedy">Comedy</option>
                     <option value="Broadway">Broadway</option>
                     <option value ="HorseRacing">HorseRacing</option>
                     <option value= "Monster Trucks">Monster Trucks</option>
                    </select>
                    
                    

                    <label htmlFor='genre'>What Genre Of Music Do You Like? Please select all that apply</label>
                    <input type= "checkbox" value= "Hard Rock" onChange={handleOnChange} />Hard Rock
                    <input type= "checkbox" value= "Reggae" onChange={handleOnChange} />Reggae
                   

                        
                        
                   

                    <label htmlFor='capacity'>What Type Of Sports Do You Enjoy?</label> 
                    



                    <label htmlFor='capacity'>Is It A Certain Venue Size You Prefer?</label>
                   


                    

                    

                </p>

                <input className='submit' type="submit"value ="Submit"/>


                

                     

            </form>

            
        </div>
    )
}

export default UserPreferenceForm;