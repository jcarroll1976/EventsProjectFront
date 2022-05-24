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
    const [sport, setsport] = useState<string[]>([] );
   


    const handleOnChange = (e: any) => {
       const value = e.target.value;
       const checked = e.target.checked;
       console.log(`${value} is ${checked}`);

       if(checked) {
           setgenre(prev =>[...prev,value])
       }else{
           setgenre(genre.filter(g => g!== value))
       }

       if (checked) {
           seteventType(prev => [...prev, value])
       }else{
           seteventType(eventType.filter(et =>et! == value))
       }

       if(checked) {
           setsport(prev => [...prev, value])
       }else{
           setsport(sport.filter(s => s! == value))
       }


    }    

    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        const UserPref: UserPreference = {
            postal_code: postalCode,
            genre:genre, 
            sport:sport,
            event: eventType,
            
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
                    <input type= "checkbox" value= "Sports" onChange={handleOnChange} />Sports
                    <input type= "checkbox" value= "Concerts" onChange={handleOnChange} />Concerts
                    <input type= "checkbox" value= "Comedy" onChange={handleOnChange} />Comedy
                    <input type= "checkbox" value= "Broadway" onChange={handleOnChange} />Broadway
                    <input type= "checkbox" value= "HorseRacing" onChange={handleOnChange} />HorseRacing
                    <input type= "checkbox" value= "Monster_Trucks" onChange={handleOnChange} />Monster Trucks
                </p>

                <p>  
                    <label htmlFor='genre'>What Genre Of Music Do You Like? Please select all that apply</label>
                    <input type= "checkbox" value= "Hard_Rock" onChange={handleOnChange} />Hard Rock
                    <input type= "checkbox" value= "Reggae" onChange={handleOnChange} />Reggae
                    <input type= "checkbox" value= "Hip_Hop" onChange={handleOnChange} />Hip Hop
                    <input type= "checkbox" value= "Techno" onChange={handleOnChange} />Techno
                    <input type= "checkbox" value= "Pop" onChange={handleOnChange} />Pop
                    <input type= "checkbox" value= "Electronic" onChange={handleOnChange} />Electronic
                    <input type= "checkbox" value= "Folk" onChange={handleOnChange} />Folk
                    <input type= "checkbox" value= "Punk" onChange={handleOnChange} />Punk
                    <input type= "checkbox" value= "Soul" onChange={handleOnChange} />Soul
                    <input type= "checkbox" value= "Latin" onChange={handleOnChange} />Latin
                    <input type= "checkbox" value= "Classical" onChange={handleOnChange} />Classical
                    <input type= "checkbox" value= "Jazz" onChange={handleOnChange} />Jazz
                    <input type= "checkbox" value= "Blues" onChange={handleOnChange} />Blues
                    <input type= "checkbox" value= "Rap" onChange={handleOnChange} />Rap
                    <input type= "checkbox" value= "Indie" onChange={handleOnChange} />Indie
                    <input type= "checkbox" value= "Country" onChange={handleOnChange} />Country
                    <input type= "checkbox" value= "Classic_Rock" onChange={handleOnChange} />Classic Rock
                    <input type= "checkbox" value= "Alternative" onChange={handleOnChange} />Alternative
                </p>

                <p>
                    <label htmlFor='eventType'>What Type Of Sports Do You Enjoy?</label> 
                    <input type= "checkbox" value= "Baseball" onChange={handleOnChange} />Baseball
                    <input type= "checkbox" value= "Football" onChange={handleOnChange} />Football
                    <input type= "checkbox" value= "BasketBall" onChange={handleOnChange} />Baskebtall
                    <input type= "checkbox" value= "Fighting" onChange={handleOnChange} />Fighting/WWE
                    <input type= "checkbox" value= "Golf" onChange={handleOnChange} />Golf
                    <input type= "checkbox" value= "Hockey" onChange={handleOnChange} />Hockey
                    <input type= "checkbox" value= "Soccer" onChange={handleOnChange} />Soccer
                </p>

                <input className='submit' type="submit"value ="Submit"/>


                

                     

            </form>

            
        </div>
    )
}

export default UserPreferenceForm;