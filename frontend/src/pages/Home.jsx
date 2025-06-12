import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Aboutme from '../components/Aboutme'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contacts from '../components/Contacts'

const Home = () => {
  return (
    <div className=' border-blue-600 w-full h-screen '>
      
      
      <Banner/>
     
       <div id="navbar-anchor" className="h-0"></div>
       <Navbar/>
     
      <div>
         <div id="about-anchor" className="h-0"></div>
        <Aboutme/>
         <div id="skill-anchor" className="h-0"></div>
        <Skills/>
         <div id="project-anchor" className="h-0"></div>
        <Projects/>
         <div id="contact-anchor" className="h-0"></div>
        <Contacts/>
        
      </div>
    </div>
  )
}

export default Home