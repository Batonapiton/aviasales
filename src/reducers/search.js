import {
  TICKETS_LOADING_BEGIN,
  TICKETS_LOADING_FAIL,
  TICKETS_LOADING_SUCCESS,
  CHANGE_FILTER,
  CHANGE_CURRENCY
} from '../types'

let initialState = {
  tickets: [],
  ticketsWithPrices: [],
  ticketsIsloading: false,
  loadingError: '',
  currency: 'RUB',
  stopsFilter: [
    { title: 'Все', active: true, name: 'stops__all', value: 'all' },
    { title: 'Без пересадок', active: false, name: 'stops__0', value: '0' },
    { title: '1 пересадка', active: false, name: 'stops__1', value: '1' },
    { title: '2 пересадки', active: false, name: 'stops__2', value: '2' },
    { title: '3 пересадки', active: false, name: 'stops__3', value: '3' }
  ]
}
export default (state = initialState, action) => {
  switch (action.type) {
    case TICKETS_LOADING_BEGIN:
      return {
        ...state,
        ticketsIsloading: true
      }
    case TICKETS_LOADING_FAIL:
      return {
        ...state,
        ticketsIsloading: false,
        loadingError: action.payload
      }
    case TICKETS_LOADING_SUCCESS:
      return {
        ...state,
        tickets: action.payload,
        ticketsWithPrices: new Object(action.payload),
        ticketsIsloading: false
      }
    case CHANGE_FILTER:
      return {
        ...state,
        stopsFilter: state.stopsFilter.map(item => {
          if (item.name === action.payload) {
            item.active = !item.active
            return item
          } else {
            return item
          }
        })
      }
    case CHANGE_CURRENCY:
      let newTickets = JSON.parse(JSON.stringify(state.tickets));
      return {
        ...state,
        currency: action.payload,
        ticketsWithPrices:  newTickets.map(ticket => {
          if (action.payload === 'USD') {
            ticket.price = (ticket.price / 65).toFixed(2);
            return ticket
          } else if (action.payload === 'EUR') {
            ticket.price = (ticket.price / 80).toFixed(2);
            return ticket
          } else {
            return ticket
          }
        })
      }
    default:
      return state
  }
}
