import React, { Component } from 'react'
import NavFolder from './NavFolder'

export class SideNav extends Component {
  render() {
    return (
      <>
        <aside className='nav'>
          <NavFolder category="about me" items={[{name:"about me"}]} changeView={this.props.changeView} selected={this.props.selected} />
          <NavFolder items={this.props.projects} category="projects" changeView={this.props.changeView} selected={this.props.selected} />

        </aside>
      </>
    )
  }
}

export default SideNav
