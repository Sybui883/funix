import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div className='row m-2'>
          <input className='col-9' type='text' placeholder="Tìm Kiếm..." />
          <button className='mx-3 bg-primary text-white'
          style={{border: '0px', borderRadius: '5px',
          fontSize: '20px'}}>Tìm</button>
      </div>
    )
  }
}
