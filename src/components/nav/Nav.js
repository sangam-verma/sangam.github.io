import React from 'react'
import './Nav.css'
import {GoHome} from 'react-icons/go'
import {AiOutlineUser} from 'react-icons/ai'
import {FaProjectDiagram} from 'react-icons/fa'
import {BiMessageSquareDetail} from 'react-icons/bi'
export default function nav() {
  return (
    <nav>
        <a href='#home'><GoHome/></a>
        <a href='#about'><AiOutlineUser/></a>
        <a href='#projects'><FaProjectDiagram/></a>
        <a href='#contact'><BiMessageSquareDetail/></a>
    </nav>
    
  )
}
