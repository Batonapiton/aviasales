import React, { Component } from 'react'
import './ticket.css'
import logo from '../../resources/Logo.png'
class Ticket extends Component {
  declOfNum = (number, titles) => {
    let cases = [0, 1, 2, 3]
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ]
  }

  render() {
    return (
      <div className="ticket">
        <div className="ticket__side">
          <img className='ticket__logo' src={logo} alt="company" />
          <button className="ticket__side-button">
            {'Купить за ' + this.props.price}
          </button>
        </div>
        <div className="ticket__wrapper">
          <div className="ticket__section ticket__origin">
            <div className="ticket__time">{this.props.departureTime}</div>
            <div className="ticket__name">
              {this.props.origin + ', ' + this.props.originName}
            </div>
            <div className="ticket__date">{this.props.departureDate}</div>
          </div>
          <div className="ticket__stops">
            {this.props.stops + ' '+this.declOfNum(this.props.stops, ['пересадок','пересадка','пересадки','пересадки'])}
          </div>
          <div className="ticket__section ticket__destination">
            <div className="ticket__time">{this.props.arrivalTime}</div>
            <div className="ticket__name">
              {this.props.destinationName + ', ' + this.props.destination}
            </div>
            <div className="ticket__date">{this.props.arrivalDate}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Ticket
