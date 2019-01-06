import React, { Component } from 'react'
import { connect } from 'react-redux'
import Ticket from './ticket'
import { getTickets } from '../../actions/search'

class TicketList extends Component {
  componentDidMount() {
    this.props.getTickets()
  }

  render() {
    return (
      <div className="ticket-list">
        {this.props.tickets.map(ticket => (
          <Ticket
            price={ticket.price + " "+ this.props.currency}
            departureTime={ticket.departure_time}
            origin = {ticket.origin}
            originName={ticket.origin_name}
            departureDate={ticket.departure_date}
            stops={ticket.stops}
            arrivalTime={ticket.arrival_time}
            destination={ticket.destination}
            destinationName = {ticket.destination_name}
            destinationTime={ticket.departure_time}
            arrivalDate={ticket.arrival_date}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  let filters = state.search.stopsFilter.map(filter => {
    if (filter.active) {
      return filter.value
    }
  })
  let ticketsToLoad
  if (filters.indexOf('all') > -1) {
    ticketsToLoad = state.search.ticketsWithPrices
  } else {
    ticketsToLoad = state.search.ticketsWithPrices.filter(ticket => {
      if (filters.indexOf(ticket.stops.toString()) > -1) {
        return ticket
      }
    })
  }

  return {
    tickets: ticketsToLoad,
    currency: state.search.currency
  }
}
const mapDispatchToProps = {
  getTickets
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketList)
