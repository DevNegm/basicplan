import React from 'react'
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
function Header() {
   
  return (
    <div className='d-flex justify-content-center align-items-center hero'>
        <div className="overlay"></div>
        <div className="container header-content px-lg-0 px-4" style={{zIndex:999}}>
            <h1 className='mb-3'>Company Name</h1>
            <p>We believe that our company culture is one of our greatest strengths</p>
            <a href="#services" className='btn btn-light align-items-center fw-bold'>
                Services <BsFillArrowDownCircleFill className='ms-2'/>
            </a>
        </div>

    </div>
  )
}

export default Header