import React, { Component } from 'react'
import NavItem from './NavItem'

export class NavFolder extends Component {
  render() {
    return (
        <>
        <h3>📁 {this.props.category}</h3>
        {this.props.items.map(item => {
            return (
                <NavItem item={item.name} changeView={this.props.changeView} selected={this.props.selected} />
            )
        })}
        </>
    )
  }
}

export default NavFolder
