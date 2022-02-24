import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { DEPARTMENTS } from '../staffs'

export default class PhongBan extends Component {
  render() {
    return (
          <div>
     <Breadcrumb>
        <BreadcrumbItem><Link to='/'>Nhân Viên</Link></BreadcrumbItem>
        <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
      </Breadcrumb>
      <div className='container-fluid row'>
      {DEPARTMENTS.map((department) => (
        <div key={department.id} id="phongBan" className='col-3' style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
          <h1>{department.name}</h1>
          <p className='px-5'>Số lượng nhân viên: {department.numberOfStaff}</p>
        </div>
      ))}</div>
    </div>
    )
  }
}
