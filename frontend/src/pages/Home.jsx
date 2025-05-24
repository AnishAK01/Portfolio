import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Aboutme from '../components/Aboutme'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <div className=' border-blue-600 w-full h-screen '>
      
      
      <Banner/>
      <Navbar/>
      <div>
        <Aboutme/>
        <Skills/>
      </div>
    </div>
  )
}

export default Home