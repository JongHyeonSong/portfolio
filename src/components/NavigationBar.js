import React, { useEffect, useState } from 'react'

// import {Navbar, Nav} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { Link } from 'react-router-dom'

import {GiCornerFlag} from 'react-icons/gi'

const getRandomColor = () =>{
  const colorList = ['skyblue', 'tomato', 'yellowgreen']
  const random = Math.floor(Math.random()*colorList.length)
  return colorList[random]
}

export default function NavigationBar() {
  const [position, setPosition] = useState({  })
  const [color, setColor] = useState()

  const onMouseEnter =(e)=>{
    setPosition({
      pageX:window.pageXOffset,
      pageY:window.pageYOffset,
      left:e.target.getBoundingClientRect().left  ,
      top:e.target.getBoundingClientRect().top   ,
      width:e.target.getBoundingClientRect().width,
      height:e.target.getBoundingClientRect().height,
    })
    setColor(getRandomColor())
  }


  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      setPosition(prev=>{
        return {
          ...prev,
          pageX:window.pageXOffset,
          pageY:window.pageYOffset,
        }
      })
    })
  },[])
  return (
    <>
    {console.log(position)}
      <Navbar className="border-bottom row fixed-top px-5" bg="white" expand="lg" >
        <Navbar.Brand className="pl-5"><a href="/"><GiCornerFlag className="display-4"/></a></Navbar.Brand>

        <Navbar.Toggle className="border-0 " aria-controls="navbar-toggle" />

        <Navbar.Collapse id="navbar=toggle" >
          <Nav className=" mr-5 ml-auto  col-8 justify-content-around" >
            <Link className="nav-link" to="/"><h2 onMouseEnter={onMouseEnter}>Portfolio</h2></Link>
            <Link className="nav-link" to="/about" ><h2 onMouseEnter={onMouseEnter} >SkillSet</h2></Link>
            <Link className="nav-link" to="/contact" ><h2 onMouseEnter={onMouseEnter}>About Me</h2></Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>

      <div style={{
          position:"absolute",
          left: position.left +window.pageXOffset,
          top: position.top  +window.pageYOffset ,
          width: position.width,
          height: position.height,
          borderBottom:`5px solid ${color}`,
          transition:"all 0.5s ease-in-out",
          borderRadius:"20px",
          zIndex:9999,
          paddingBottom:"45px",
          pointerEvents: "none",
        }}
      ></div>

    </>
  )
}
