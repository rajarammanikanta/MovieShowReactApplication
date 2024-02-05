import {Component} from 'react' 

import './index.css'

import Navbar from '../Navbar'
import Footer from '../Footer'

class BookingForm extends Component{

     handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        // Access form data using formData.get('inputName')
        const selectedSeats = formData.getAll('seat');
    
        // Perform any further actions with selected seats
        console.log('Selected Seats:', selectedSeats);
      };

    render(){
        return(
            <div className='booking-container'> 
      <Navbar/>
      <p className='heading'>Fill Your Details</p>
      <>
      <form onSubmit={this.handleSubmit}>
        <div className="customer-details">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="seat-container">
          {Array.from({ length: 6 }, (_, row) => (
            <div key={row} className="seat-row">
              {Array.from({ length: 8 }, (_, col) => {
                const seat = `${String.fromCharCode(65 + row)}${col + 1}`;

                return (
                  <label key={seat} className="seat">
                    <input type="checkbox" name="seat" value={seat} />
                    {seat}
                  </label>
                );
              })}
            </div>
          ))}
        </div>

        <div className="payment-details">
          <label htmlFor="paymentMode">Payment Mode:</label>
          <select id="paymentMode" name="paymentMode" required>
            <option value="">Select Payment Mode</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="netBanking">Net Banking</option>
          </select>
        </div>

        <div className="booking-info">
          <button type="submit" className="book-button">
            Book Now
          </button>
        </div>
      </form>
</>

             <Footer/>
            </div>

        )
    }
}

export default BookingForm