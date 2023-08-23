import {Link} from 'react-router-dom'

import { Component } from "react"; 
import Navbar  from '../Navbar';
import Footer from '../Footer'
import './index.css'

class MovieItemDetails extends Component{

    state={movieList: []}

   
    componentDidMount(){
        this.getMoviesDetails()
    }

    getMoviesDetails=async()=>{
        const{match}=this.props 
        const{params}=match
        const{id}=params 
        console.log(id) 
        const apiUrl=`https://api.tvmaze.com/shows/${id}`
        const Response=await fetch(apiUrl) 
        const data=await Response.json() 
        const updatedData=({
            imageUrl: data.image.medium,
            showTitle: data.name,
            summary: data.summary.replace(/<\/?[^>]+(>|$)/g, ""),
            averageRuntime: data.averageRuntime,
            language: data.language,
            genres: data.genres.join(),
            rating: data.rating.average || 'N/A',
            runTime: data.runtime,
            status: data.status,
            schedule: data.schedule.time,
            days: data.schedule.days 

        })
        console.log(data)
  
        this.setState({movieList: updatedData})
    }
    



    render(){ 
        const{movieList}=this.state 
        const{imageUrl,showTitle,summary,language,genres,rating,averageRuntime,status,schedule,days}=movieList
     
    
        console.log(movieList)
        return( 
            <div className="overall-container">
               <Navbar/>
                <div className="item-container">
                    <div className="image-details">
                    <img src={imageUrl} alt={showTitle} className="image"/> 
                    <div className="details">
                    <h1 className="show-Time">Show Name: {showTitle}</h1>
                    <h3>Running Status: <span>{status}</span></h3>
               <h3>Language: {language}</h3>
             
               <h3>Genres: {genres}</h3>
               <h3>Rating: {rating}</h3>
               <h3>Average Runtime: {averageRuntime}</h3>
               <h3>Time & Day: {schedule},{days}</h3>

                    </div>
                    </div>
                <div>
                <h2>Summary:</h2>
               <h3 className="summary">{summary}</h3>
                </div>
            <Link to="/bookingform">
            <div>
                    <button type="button" className='book-button'>Book Now</button>
                </div>
            </Link>
                
              
             
                </div>
         
           <Footer/>
            </div>

        )
    }
}

export default MovieItemDetails