import React, { useState, useEffect, useContext } from 'react'
import randomWords from 'random-words'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import './home.css'
import {dataString} from "./navbar"
const pageNum = 1

function Home() {

  const searchData = useContext(dataString)
  const [images, setImages] = useState([])
  const [res, setRes] = useState({})
  const [page, setPage] = useState(pageNum)
  const [value, setValue] = useState("Cat")

  function handleNewLoading(){
    setValue(searchData)
  }
  if(searchData.length > 0){
    handleNewLoading()
  }
  
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${value}&client_id=6-jCrab1xixjBkEIP_hGKukz3iB44nR3nAyDleOQops`
  
// Fetching images from api

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      if (response) {
        setRes(response)
        setImages([...images, ...response.data.results])
      }
    };
    fetchData();
  }, [url]);


  // Implemeting lazy loading feature

  const scrolltoEnd = () => {
    setPage(pageNum + 1)
    let str = randomWords(1)[0]
    setValue(str)
  }

  window.onscroll = function(){
    if(Math.abs(Math.round(window.innerHeight + document.documentElement.scrollTop) - Math.round(document.documentElement.offsetHeight)) <= 1){
      scrolltoEnd()
    }
  }

  const handleSearch = (e) => {
    // console.log("Searched")
    setValue(e.target.value)
    setImages(res.data.results)
  }

  return (
    <div>
      <div className="container">
        
        <div className="container-content">
          <div className='heading'>Unsplash</div>
          <div className="desciption">
            <span>The internet’s source of freely-usable images.</span>
            <br/>
            Powered by creators everywhere.
          </div>
          <div className="search-here">
            <Container fluid>
              <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="search"
                    aria-label="Search"
                    onChange = {handleSearch}
                    // (e) => setValue(e.target.value)
                  />
                </Form>
              </Navbar.Collapse>
            </Container>
          </div>
          <div className="trending">
            <span>Trending:</span> flower, wallpapers, background, shappylove
          </div>
        </div>
      </div>

      <div className="api-container">
        {
          images.map((value) => {
            return(
              <img src={value.urls.regular} className="imgs" alt="" />
            )
          })
        }
        {/* {
          images.map((imgs) => {
            return(
              <img src={imgs} className="imgs" alt="" />
            )
          })
        } */}
      </div>

    </div>
  )
}

export default Home





// .display-imgs {
//   display: flex;
//   /* width: 300px;
//   height: 300px; */
//   justify-content: space-between;
//   /* flex-wrap: wrap; */
//   /* padding: 5px; */
//   margin: 45px 60px;
// }

// .imgs {
//   width: 400px;
//   height: 400px;
//   /* object-fit: cover; */
//   /* margin-bottom: 20px;
//   border-radius: 5px;
//   cursor: pointer;
//   background: #f9f9f9; */
// }
