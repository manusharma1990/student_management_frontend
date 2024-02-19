import React, { Component } from 'react'
import './MainBody.css'
import { Home } from './Home'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import View from './View'
import Downbar from '../Downbar'

export class mainbody extends Component {
  render() {
    return (
      <div className='red'>
       <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/reg" element={<Register />} />
          <Route path="/show" element={<View />} />
          <Route path="/contact" element={<Downbar />} />
        </Routes>

      </div>
    )
  }
}

export default mainbody