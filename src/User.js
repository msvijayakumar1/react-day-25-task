import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function User() {
  const[users,SetUsers]=useState([]);
     useEffect(()=>{
       SetUsers([
        {
        id:1,
        username:"person 1",
        email:"person1@gmail.com",
        country:"India",
        state:"Tamilnadu",
        city:"Madurai",
        phone:"699999990",
        dob:"08-02-1999",
        gender:"Female",
       },
       {
        id:2,
        username:"person 2",
        email:"person2@gmail.com",
        country:"India",
        state:"Tamilnadu",
        city:"Chennai",
        phone:"699969990",
        dob:"08-02-1989",
        gender:"Male",
       }
      ])
     })

  return (
    <div class="container-fluid">
       <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Table</h1>
        <Link to={"/create-user"}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create user
        </Link>
       
      </div>
      
      <div class="card shadow mb-4">
      <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
        <div class="table-responsive">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Country</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Phone</th>
                                            <th>DOB</th>
                                            <th>Gender</th>
                                            <th>Action</th>
                                            <th>EditUser</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                        <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Country</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Phone</th>
                                            <th>DOB</th>
                                            <th>Gender</th>
                                            <th>Action</th>
                                            <th>EditUser</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                       {
                                        users.map((v)=>{
                                          return <tr>
                                            <td>{v.id}</td>
                                          <td>{v.username}</td>
                                          <td>{v.email}</td>
                                          <td>{v.country}</td>
                                          <td>{v.state}</td>
                                          <td>{v.city}</td>
                                          <td>{v.phone}</td>
                                          <td>{v.dob}</td>
                                          <td>{v.gender}</td>
                                          <td>
                                            <Link to={`/profile/${v.id}`} className='btn btn-warning '>
                                              Profile
                                            </Link>
                                            <Link to={`/edit-profile/${v.id}`} className='btn btn-dark mt-2 '>
                                              EditProfile
                                            </Link>
                                          </td>
                                          <td>
                                          <Link to={`/edit-user/${v.id}`} className='btn btn-primary mt-4 '>
                                              EditUser
                                            </Link>
                                          </td>
                                      </tr>
                                        })
                                       }
                                       
                                    </tbody>
                                </table>
        </div>
        </div>
        </div>
      </div>
  )
}

export default User