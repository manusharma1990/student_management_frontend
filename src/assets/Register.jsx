import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import url from '../../public/url';

const Register = () => {
  const [Student,setStudent] = useState({});
  
  const Checking = (e)=>{
    sending(Student);
    console.log(Student);
    e.preventDefault();
  }
  const sending = (Student)=>{
    axios.post(`${url}register`,Student).then(response=>{
      console.log(response); toast.success('Your Registeration Has Been Successful.');}).catch(error=> console.log(error));
  }
  
  return (
    <>
      <div className='m-3'>
        <form  onSubmit={Checking}>
          {/* username */}
          <div className="mb-3">
            <label for="username" className="form-label">Username</label>
            <input type="text" className="form-control" name='username' id="username" placeholder='enter your email address' onChange={e=>{setStudent({...Student, username : e.target.value})}}  / >
          </div>
          {/* fullname */}
          <div className="mb-3">
            <label for="fullname" className="form-label">Fullname</label>
            <input type="text" className="form-control" name='fullname' id="fullname" placeholder='your full name' onChange={e=>{setStudent({...Student, fullname : e.target.value})}} / >
          </div>
          {/* password */}
          <div className="mb-3">
            <label for="Password" className="form-label">Password</label>
            <input type="password" className="form-control" id="Password" name='password' placeholder='enter password of your choice' onChange={e=>{setStudent({...Student, password : e.target.value})}}/ >
          </div>
          {/* fee */}
          <div className="mb-3">
            <label for="fee" className="form-label">Fee</label>
            <input type="number" className="form-control" id="fee" placeholder='enter fee a,ount' name='fee' onChange={e=>{setStudent({...Student, fee : e.target.value})}} / >
          </div>
          {/* course */}
          <div className="mb-3">
            <label for="course" className="form-label">Course</label>
            <input type="text" className="form-control" name='course' id="course" placeholder='enter course' onChange={e=>{setStudent({...Student, course : e.target.value})}} / >
          </div>
          {/* join_on */}
          <div className="mb-3">
            <label for="join_on" className="form-label">JOIN ON</label>
            <input type="date" className="form-control" id="join_on" name='join_on' onChange={e=>{setStudent({...Student, join_on : e.target.value})}} / >
          </div>
          {/* address */}
          <div className="mb-3">
            <label for="address" className="form-label">Address</label>
            <input type="text" className="form-control" id="address" name='address' placeholder='enter permanent address' onChange={e=>{setStudent({...Student,address : e.target.value})}} / >
          </div>
          <div className='text-center'>
          <button type="submit" className="btn btn-outline-warning mt-2">Register</button>
          </div>
        </form>
      </div>
      
    </>
  )
}

export default Register;