import React, { Component } from 'react'

export class NavItem extends Component {
  render() {
    return (
        <>
        <button className={`link-button side ${this.props.selected === this.props.item ? 'selected' : ''}`} onClick={() => this.props.changeView(this.props.item)}>{this.props.item}</button>
        </>
    )
  }
}

export default NavItem
