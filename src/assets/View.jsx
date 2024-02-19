import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import url from '../../public/url'
import { Bounce, toast } from 'react-toastify'

export default function View() {
  const [student, setStudent] = useState([]);
  useEffect(()=>{
    toast.success('🦄 Wow so easy!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition : Bounce
      })
    getUser()
    
  }
    ,[]
  )
  const getUser = async () =>{
    const list = await axios.get(`${url}viewAll`)
    console.log("student.data of axios.get data ")
    console.log(list.data);
    console.log("setting data to setStudent");
    setStudent(list.data);
    console.log(student)
    }
  return (
    <div>
      <h1 className='text-center'>List Of all Students</h1>
      <table cellPadding={5} cellSpacing={5} border={2} className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>FULLNAME</th>
            <th>USERNAME</th>
            <th>COURSE</th>
            <th>JOIN_ON</th>
            <th>ADDRESS</th>
          </tr>
        </thead>
        <tbody>
          {
            student.map((single,index)=>{
              return <tr key={index}>
                <td>{single.id}</td>
                <td>{single.fullname}</td>
                <td>{single.username}</td>
                <td>{single.course}</td>
                <td>{single.join_on}</td>
                <td>{single.address}</td>
              </tr>
            })
          }
        </tbody>
        
      </table>
    </div>
  )
}
