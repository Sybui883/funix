import React, { Component } from 'react'
import Footer from './StaffListComponent/Footer/Footer'
import Nav from './StaffListComponent/Nav/Nav'

export default class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Nav />
        <Footer />
      </div>
    )
  }
}
