import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeFilter, changeCurrency } from '../../actions/search'
import './sidebar.css'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

class Sidebar extends Component {
  state = {
    currencyBtnClass: ['sidebar__button sidebar__button_left ', 'sidebar__button', 'sidebar__button sidebar__button_right'],
    currencyActiveClass: ' sidebar__button_active'
  }
  handleCurrencyButtonClick = e => {
    this.props.changeCurrency(e.target.innerHTML)
  }
  handleCheck = e => {
    this.props.changeFilter(e.target.name)
  }

  render() {

    return (

      <div className="sidebar">
        <div className="sidebar__wrapper">
          <p className="sidebar__title">Валюта</p>
          <div className="sidebar__buttons-panel">
            <button
              onClick={this.handleCurrencyButtonClick}
              className={ (this.props.currency !== 'RUB') ? this.state.currencyBtnClass[0] : this.state.currencyBtnClass[0] + this.state.currencyActiveClass}>
              RUB
            </button>
            <button
              onClick={this.handleCurrencyButtonClick}
              className={this.props.currency !== 'USD' ? this.state.currencyBtnClass[1] : this.state.currencyBtnClass[1] + this.state.currencyActiveClass}>
              USD
            </button>
            <button
              onClick={this.handleCurrencyButtonClick}
              className={this.props.currency !== 'EUR' ? this.state.currencyBtnClass[2] : this.state.currencyBtnClass[2] + this.state.currencyActiveClass}>
              EUR
            </button>
          </div>
          <p className="sidebar__title">Количество пересадок</p>
          <ul className="sidebar__stops stops">
            {this.props.checkboxes.map(checkbox => (
              <li className="stops__list-item" key={checkbox.name}>
                <FormControlLabel
                  className="stops__list-item-checkbox-label"
                  control={
                    <Checkbox
                      color="#f1fcff"
                      key={checkbox.name}
                      name={checkbox.name}
                      checked={checkbox.active}
                      className="stops__list-item-checkbox"
                      onChange={this.handleCheck}
                    />
                  }
                  label={checkbox.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    checkboxes: state.search.stopsFilter,
    currency: state.search.currency
  }
}

const mapDispatchToProps = {
  changeFilter,
  changeCurrency
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
