import React, { useState, useContext, createContext } from 'react'
import Home from "./home"
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Header from 'react-bootstrap/Navbar';
import './navbar.css'
import img from '../images/logo.png'

const dataString = createContext()

function Navbar() {
  const handleClick = (clickedData) => {
    // console.log(clickedData)
    setValue(clickedData)
    // e.preventDefault();
  }
  const [value, setValue] = useState("")
  return (

    <dataString.Provider value={value}>
      <div className='main'>
        <Header bg="light" expand="lg">
          <div className="navbar">
            <div className="img">
              <img src={img} alt="" className='logo' />
            </div>
            <div>
              <Container fluid>
                <Header.Collapse id="navbarScroll">
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </Form>
                </Header.Collapse>
              </Container>
            </div>
            <div className='navlist'>
              Explore
            </div>
            <div className='navlist'>
              Advertise
            </div>
            <div className='navlist'>
              Blog
            </div>
            <div className='navlist'>
              |
            </div>
            <div className='navlist'><span>
              Submit a photo
            </span></div>
            <div className='navlist'>
              <NotificationsRoundedIcon />
            </div>
            <div className='navlist'>
              <PersonRoundedIcon />
            </div>
            <div className='navlist'>
              <MenuRoundedIcon />
            </div>
          </div>
        </Header>

        {/* ------------------------- */}

        <Header bg="light" expand="lg">
          <div className="sub-navbar">
            <div className="items">
              Editorial
            </div>
            <div className="items">
              |
            </div>
            <div className="items Events">
              Current Events
            </div>
            <div className="items Wallpapers">
              Wallpapers
            </div>
            <div className="items Renders">
              3D Renders
            </div>
            <div className="items Textures"  onClick={() => handleClick("Textures")}>
              Textures and Patterns
            </div>
            <div className="items Experimental">
              Experimental
            </div>
            <div className="items Architecture">
              Architecture
            </div>
            <div className="items Nature">
              Nature
            </div>
            <div className="items Business">
              Business and Work
            </div>
            <div className="items Fashion">
              Fashion
            </div>
            <div className="items Film">
              Film
            </div>
            <div className="items Food">
              Food and Drink
            </div>
            <div className="items Health">
              Health and Wellness
            </div>
            <div className="items People">
              People
            </div>
          </div>
        </Header>
        <Home />
      </div>
    </dataString.Provider>
  )
}

export default Navbar
export { dataString }