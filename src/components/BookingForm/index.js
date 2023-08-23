import {Component} from 'react' 

import './index.css'

import Navbar from '../Navbar'
import Footer from '../Footer'

class BookingForm extends Component{


    renderNavbar=()=>(
        <nav className='navbar'>
            <p>Lights, Camera, Enjoy!</p>
        </nav>
    )
    renderFooter=()=>(
        <div className='footer'>
            <p>Movies can make you feel things you've never felt, and sometimes, they even make you attracted to a different world</p>
        </div>
    )

    render(){
        return(
            <div className='booking-container'> 
      <Navbar/>
      <p>Fill Your Details</p>
             <Footer/>
            </div>

        )
    }
}

export default BookingForm