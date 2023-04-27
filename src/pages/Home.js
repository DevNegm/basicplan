import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/reducers/homeSlice'
import Header from '../components/Header'
import AboutSection from '../components/AboutSection'
function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    const data = useSelector((state) => state?.home?.data);
    
  return (
    <div>
        <Header />
        <AboutSection data={data?.home_page?.home_sections}/>
    </div>
  )
}

export default Home