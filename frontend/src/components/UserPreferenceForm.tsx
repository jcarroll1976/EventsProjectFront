import {FormEvent, useState} from 'react';
import './UserPreferenceForm.css';
import {UserPreference} from "../models/eventModels";


interface Props {
    onSubmit:(UserPreference:UserPreference) => void;
}    
    

function UserPreferenceForm({onSubmit}: Props) {
    const [eventType, seteventType] =useState<string[]>([]);
    const [postalCode, setpostalCode]= useState('');
    const [genre, setgenre] = useState<string[]>([]);
    const [sport, setsport] = useState<string[]>([]);
   


    const handleGenreChange = (e: any) => {
       const genreValue = e.target.value;
       const genreChecked = e.target.checked;
       console.log(`${genreValue} is ${genreChecked}`);

       if(genreChecked) {
           setgenre(prev =>[...prev,genreValue])
       }else{
           setgenre(genre.filter(g => g!== genreValue))
       }
    }

    const handleEventChange = (e: any) => {
        const eventValue = e.target.value;
        const eventChecked = e.target.checked;
        console.log(`${eventValue} is ${eventChecked}`);
 
        if (eventChecked) {
            seteventType(prev => [...prev, eventValue])
        }else{
            seteventType(eventType.filter(et =>et! == eventValue))
        }
     }

     const handleSportChange = (e: any) => {
        const sportValue = e.target.value;
        const sportChecked = e.target.checked;
        console.log(`${sportValue} is ${sportChecked}`);
        
        if(sportChecked) {
            setsport(prev => [...prev, sportValue])
        }else{
            setsport(sport.filter(s => s! == sportValue))
        }
     }

        

    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        const UserPref: UserPreference = {
            postal_code: postalCode,
            genre:genre, 
            sport:sport,
            event: eventType
        }

        onSubmit(UserPref);
        seteventType([]);
        setpostalCode('');
        setgenre([]);
    }

    return(
        <div className='UserPreferenceForm'>
            <form onSubmit={handleSubmit}>   
              <h1> Welcome to Event Finder </h1 >
              <h4>PLEASE TAKE OUR QUIZ TO FIND YOUR EVENT STYLE</h4>

                <p>
                    <label htmlFor='postalcode'>What is your desired location? </label>
                    <input type ="number"  placeholder = "zipcode" value = {postalCode} onChange =  {e => setpostalCode(e.target.value)} required></input>
                </p>


                <p>
                    <label htmlFor='type'>Which Type of Events Are You Looking For? Please select all that apply</label>
                    <input type= "checkbox" value= "Sports" onChange={handleEventChange} />Sports
                    <input type= "checkbox" value= "Concerts" onChange={handleEventChange} />Concerts
                    <input type= "checkbox" value= "Comedy" onChange={handleEventChange} />Comedy
                    <input type= "checkbox" value= "Broadway" onChange={handleEventChange} />Broadway
                    <input type= "checkbox" value= "HorseRacing" onChange={handleEventChange} />HorseRacing
                    <input type= "checkbox" value= "Monster_Trucks" onChange={handleEventChange} />Monster Trucks
                </p>

                <p>  
                    <label htmlFor='genre'>What Genre Of Music Do You Like? Please select all that apply</label>
                    <input type= "checkbox" value= "Hard_Rock" onChange={handleGenreChange} />Hard Rock
                    <input type= "checkbox" value= "Reggae" onChange={handleGenreChange} />Reggae
                    <input type= "checkbox" value= "Hip_Hop" onChange={handleGenreChange} />Hip Hop
                    <input type= "checkbox" value= "Techno" onChange={handleGenreChange} />Techno
                    <input type= "checkbox" value= "Pop" onChange={handleGenreChange} />Pop
                    <input type= "checkbox" value= "Electronic" onChange={handleGenreChange} />Electronic
                    <input type= "checkbox" value= "Folk" onChange={handleGenreChange} />Folk
                    <input type= "checkbox" value= "Punk" onChange={handleGenreChange} />Punk
                    <input type= "checkbox" value= "Soul" onChange={handleGenreChange} />Soul
                    <input type= "checkbox" value= "Latin" onChange={handleGenreChange} />Latin
                    <input type= "checkbox" value= "Classical" onChange={handleGenreChange} />Classical
                    <input type= "checkbox" value= "Jazz" onChange={handleGenreChange} />Jazz
                    <input type= "checkbox" value= "Blues" onChange={handleGenreChange} />Blues
                    <input type= "checkbox" value= "Rap" onChange={handleGenreChange} />Rap
                    <input type= "checkbox" value= "Indie" onChange={handleGenreChange} />Indie
                    <input type= "checkbox" value= "Country" onChange={handleGenreChange} />Country
                    <input type= "checkbox" value= "Classic_Rock" onChange={handleGenreChange} />Classic Rock
                    <input type= "checkbox" value= "Alternative" onChange={handleGenreChange} />Alternative
                </p>

                <p>
                    <label htmlFor='eventType'>What Type Of Sports Do You Enjoy?</label> 
                    <input type= "checkbox" value= "Baseball" onChange={handleSportChange} />Baseball
                    <input type= "checkbox" value= "Football" onChange={handleSportChange} />Football
                    <input type= "checkbox" value= "BasketBall" onChange={handleSportChange} />Baseball
                    <input type= "checkbox" value= "Fighting" onChange={handleSportChange} />Fighting/WWE
                    <input type= "checkbox" value= "Golf" onChange={handleSportChange} />Golf
                    <input type= "checkbox" value= "Hockey" onChange={handleSportChange} />Hockey
                    <input type= "checkbox" value= "Soccer" onChange={handleSportChange} />Soccer
                </p>

                <input className='submit' type="submit"value ="Submit"/>

            </form>

            
        </div>
    )
}

export default UserPreferenceForm;