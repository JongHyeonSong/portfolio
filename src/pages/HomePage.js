import React from 'react';
import PortfolioCarousel from '../components/PortfolioCarousel';
import Hero from '../components/Hero';

const HomePage = (props)=>{
  return(
    <>
    <Hero title={props.title}/> 
    <PortfolioCarousel/>
    </>
  )
}

export default HomePage;