import React, { Component } from 'react';
import './index.css'
import AboutMe from './components/AboutMe'
import SideNav from './components/SideNav'

class App extends Component {
  state = {
    view: 'about'
  }

  renderContents = () => {
    switch (this.state.view) {
      case 'about':
        return <AboutMe />
        break
    }
  }

  render() {
    return (
      <>
        <div className='window-shadowed'>
          <div className='window-inner'>
              <h1 className='window-heading'>paul mourer's portfolio</h1>
              <SideNav />
              <main className='window-contents'>
              {this.renderContents()}
              </main>
          </div>
        </div>
      </>
    )
  }
}

export default App