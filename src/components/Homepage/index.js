import {Link} from 'react-router-dom'

import {Component} from 'react' 



import './index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'


class Homepage extends Component{


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
            <>
            
           <Navbar/>
             <div className='home-container'>
        
                <h1 className='main-heading'>Welcome to a world of cinematic wonders! Dive into a realm of movie magic with our app, where every click unveils a new adventure on the silver screen</h1>
     <div>
     <img src="https://www.dqindia.com/wp-content/uploads/2017/12/movie.jpg" alt="home"/>
     <img src="https://img.freepik.com/premium-psd/3d-render-cinema-ticket-popup-from-smartphone-with-booking-tickets-online_252008-535.jpg?w=2000" alt="ticket"/>
     </div>
    
 <Link to="/shows">
 <button type="button" className='book-button'>Book Now</button>
 </Link>

                </div>
         <Footer/>
            </>
   
        )
    }
}

export default Homepage