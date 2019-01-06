import React, { Component } from 'react'
import { connect } from 'react-redux'
import  Sidebar  from './sidebar'
import  TicketList  from './ticketList'
import "./home.css"

class Home extends Component {


  render() {
    return (
      <div className="home">
        <Sidebar />
        <TicketList />
      </div>
    )
  }
}

const mapStateToProps = ({ search }) => ({

})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
