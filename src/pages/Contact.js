import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/reducers/homeSlice';
import AboutSection from '../components/AboutSection';

function Contact() {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchData())
  }, [dispatch])
  const data = useSelector((state) => state?.home?.data);
  return (
    <div>
      <AboutSection data={data?.pages?.[1]?.sections}/>
    </div>
  )
}

export default Contact