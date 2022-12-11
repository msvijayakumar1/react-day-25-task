import React from 'react'
import { useParams } from 'react-router-dom'

function Viewuser() {
  const params = useParams()
  return (
   <div className='container-fluid'>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Profile</h1>
        
        </div>
    <div className='row'>
      <div className='col-lg-6'>
          ID : {params.id}
      </div>
      <div className='col-lg-6'>
          Name : Person
        </div>
        <div className='col-lg-6'>
          Email : person1@gmail.com
        </div>
        <div className='col-lg-6'>
          country : India
        </div>
        <div className='col-lg-6'>
          State : Tamilnadu
        </div>
        <div className='col-lg-6'>
          City : Madurai
        </div>
        <div className='col-lg-6'>
           Phone : 699999990
        </div>
        <div className='col-lg-6'>
           DOB : 08-02-1999
        </div>
        <div className='col-lg-6'>
           Gender : Female
        </div>
    </div>
   </div>
    
      
    
  )
}

export default Viewuser