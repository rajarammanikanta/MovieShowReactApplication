import {Component} from 'react' 

import './index.css'

import Navbar from '../Navbar'
import Footer from '../Footer'

class BookingForm extends Component{



    render(){
        return(
            <div className='booking-container'> 
      <Navbar/>
      <p className='heading'>Fill Your Details</p>
      <form className='form-container'>
        <div>
        <label htmlFor='name'>Name:</label>
        <br/>
        <input type="text" id="name"/>
        </div> 
        <div>
            <label htmlFor='email'>Email:</label>
            <br/>
            <input type="email"/>
        </div>
         <div>
            <label htmlFor='no_of_person'>No Of PERSONS</label>
            <br/>
            <input type="text"/> 
         </div>
         <div>
            <label htmlFor='movie'>Choose Movie</label>
            <br/>
            <select id="movie">
                <option>All Stars</option>
                <option>All Stars</option>
                <option>All Stars</option>
                <option>All Stars</option>
            </select>
         </div>
         <div>
            <label htmlFor='phone'>Phone:</label>
            <br/> 
            <input type="text" id="phone"/>
         </div>
         <div>
            <button type="submit" className='book-button'>Book Now</button>
         </div>
         
      </form>
             <Footer/>
            </div>

        )
    }
}

export default BookingForm