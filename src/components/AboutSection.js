import React from 'react'

function AboutSection(data) {
  console.log("from about",data)
  return (
    <div className='container py-5' id='services'>
        {data?.data?.map((section,index) => (
          <div className="row py-5" style={{flexDirection: index % 2 ? "row" : "row-reverse",}}>
          <div className="col-md-6 px-lg-0 px-4">
          <img className='w-100 rounded-3' src={section?.image} alt={section?.title} />
          </div>
          <div className="col-md-6 p-lg-5 p-4 about-section">
            <h2 className='fs-3 fw-bold'>{section?.title}</h2>
              <p className='h5'>{section?.description}</p>
          </div>
        </div>
        ))}
      
    </div>
  )
}

export default AboutSection