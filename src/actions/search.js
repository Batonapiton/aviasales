import {
  TICKETS_LOADING_FAIL,
  TICKETS_LOADING_BEGIN,
  TICKETS_LOADING_SUCCESS,
  CHANGE_FILTER,
  CHANGE_CURRENCY
} from '../types'

export const getTickets = ()=>dispatch => {

  dispatch(ticketsLoadingBegin());
  return fetch('http://localhost:3000/tickets')
    .then(result => result.json())
    .then(tickets => dispatch(ticketsLoadingSuccess(tickets)))
    .catch(error => dispatch(ticketsLoadingFail(error)))

}
export const ticketsLoadingBegin = () => {
  return dispatch => {
    dispatch({
      type: TICKETS_LOADING_BEGIN
    })
  }
}
export const ticketsLoadingFail = error => {
  return dispatch => {
    dispatch({
      type: TICKETS_LOADING_FAIL,
      payload: error
    })
  }
}
export const ticketsLoadingSuccess = tickets => {
  return dispatch => {
    dispatch({
      type: TICKETS_LOADING_SUCCESS,
      payload: tickets
    })
  }
}
export const changeFilter = filterName => {
  return dispatch => {
    dispatch({
      type: CHANGE_FILTER,
      payload: filterName
    })
  }
}
export const changeCurrency = currency => {
  return dispatch => {
    dispatch({
      type: CHANGE_CURRENCY,
      payload: currency
    })
  }
}
