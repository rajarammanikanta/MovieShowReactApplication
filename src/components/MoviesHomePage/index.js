import {Link} from 'react-router-dom'
import {Component} from 'react' 
import Navbar from '../Navbar'
import Footer from '../Footer'
import './index.css'

class MoviesHomePage extends Component{ 
 

    state={shows: []}

 
    componentDidMount(){
        this.getShowDetails() 
    }

    getShowDetails=async()=>{

        const apiUrl="https://api.tvmaze.com/search/shows?q=all"
        const Response=await fetch(apiUrl) 
        if(Response.ok===true){
            const data=await Response.json() 
            const updatedData=data.map(eachData=>({
                id: eachData.show.id,
                showName: eachData.show.name,
                averageRuntime: eachData.show.averageRuntime,
                imageUrl: eachData.show.image ? eachData.show.image.medium : null,
                language: eachData.show.language,
                genres: eachData.show.genres,
                rating: eachData.show.rating.average || 'N/A'
            }))
            console.log(data)
          
      
             this.setState({shows: updatedData})
          
        }
    }

 


    renderMovieCards=()=>{
        const{shows}=this.state  
      
      

        return(
            <div>
           <ul className='list-container'>
            {shows.map(eachShow=>(<li className='list-item'> 
                <img src={eachShow.imageUrl} alt={eachShow.showName} className='show-image'/>
                <p className="title">Title: {eachShow.showName}</p> 
                <p>Language: {eachShow.language}</p> 
                <p>Genres: {eachShow.genres[0]},{eachShow.genres[1]}</p>
            <p>Rating:  {eachShow.rating}</p>   
            <Link to={`/shows/${eachShow.id}`}>
            <button type="button" className='view-button'>View More</button>
                
                </Link> 
   
            </li>))}
           </ul>
            </div>
        )
    }

    render(){
    const{shows}=this.state 
    console.log(shows)
     
        
        return(
            <div className='main-container'>
                <Navbar/>
              {this.renderMovieCards()}
               <Footer/>

                
            </div>

        )
    }
}

export default MoviesHomePage 
