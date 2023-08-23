import {BrowserRouter,Route, Switch} from 'react-router-dom'


import MoviesHomePage from './components/MoviesHomePage'
import MovieItemDetails from './components/MovieItemDetails'
import Homepage from './components/Homepage';
import BookingForm from './components/BookingForm';
import './App.css';

const App=()=>(
  <BrowserRouter>
   <Switch>
    <Route exact path="/" component={Homepage}/>
    <Route exact path='/shows' component={MoviesHomePage}/>
    <Route exact path="/shows/:id" component={MovieItemDetails}/>
    <Route exact path="/bookingform" component={BookingForm}/>
   </Switch>
 
  </BrowserRouter>

)

export default App;
