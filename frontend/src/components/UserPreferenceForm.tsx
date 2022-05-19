import {FormEvent, useState} from 'react';
import './UserPreferenceForm.css';
import {Event} from "../models/eventModels";



interface Props {
    onSubmit:(event:Event) => void;
}    
    


function UserPreferenceForm({onSubmit}: Props) {
    const [type, settype] =useState('');
    const [capacity, setcapacity]= useState('');
    const [postalCode, setpostalCode]= useState('');
    
    

    
 function handleSubmit(e:FormEvent) {
    e.preventDefault();
    const event: Event = {
        type:type,
        venue: {capacity:Number(capacity),postal_code: postalCode },
        
    }
    onSubmit(event);
    settype('');
    setcapacity('');
    setpostalCode('');

}

    return(
        <div className='UserPreferenceForm'>
            <form onSubmit={handleSubmit}>   
              <h1> Welcome to Event Finder   </h1 >
              <h4>PLEASE TAKE OUR QUIZ TO FIND YOUR EVENT STYLE</h4>

                <p>
                    <label htmlFor='postalcode'>What is your desired location? </label>
                    <input type ="number"  placeholder = "zipcode" value = {postalCode} onChange =  {e => setpostalCode(e.target.value)}></input>

                    <label htmlFor='type'>Which Type of Events Are You Looking For? Please select all that apply</label>
                    <input type ="checkbox" value = {type} onChange =  {e => settype(e.target.value)}></input>
                    <select>
                     <option value="Baseball">Baseball</option>
                     <option value="Football">Football</option>
                     <option value="Fighting/WWE">Fighting/WWE</option>
                     <option value="Golf">Golf</option>
                     <option value ="Hockey">Hockey</option>
                     <option value= "Soccer">Soccer</option>
                    </select>
                    

                    <label htmlFor='type'>What Kind Of Music Do You Like? Please select all that apply</label>
                    <input type ="checkbox" value = {type} onChange =  {e => settype(e.target.value)}>
                        <option value="Hard Rock">Hard Rock</option>
                        <option value="Reggae">Reggae</option>
                        <option value="Hip Hop">Hip Hop</option>
                        <option value="Techno">Techno</option>
                        <option value="Pop">Pop</option>
                        <option value="Electronic">Electronic</option>
                        <option value="Folk">Folk</option>
                        <option value="Punk">Punk</option>
                        <option value="Soul">Soul</option>
                        


                    </input>

                    <label htmlFor='capacity'>Is It A Certain Venue Size You Prefer?</label>
                    <input type ="checkbox" value = {capacity} onChange =  {e => setcapacity(e.target.value)}>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </input>



                    

                    

                </p>

                <input className='submit' type="submit"value ="Submit"/>


                

                     

            </form>

            
        </div>
    )
}

export default UserPreferenceForm;