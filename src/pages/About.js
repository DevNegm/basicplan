import React, { useEffect } from 'react'
import AboutSection from "../components/AboutSection"
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/reducers/homeSlice'
function About() {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchData())
  }, [dispatch])
  const data = useSelector((state) => state?.home?.data);
  return (
    <div>
      <AboutSection data={data?.pages?.[0]?.sections}/>
    </div>
  )
}

export default About