import React, { useEffect } from 'react'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import Hero from './components/Hero'
import LatestProjects from './components/LatestProjects'
import Qualification from './components/Qualification'
import Specializing from './components/Specializing'
import Testimonials from './components/Testimonials'


// for animation

import Aos from 'aos';
import "aos/dist/aos.css";
import Counter from './components/Counters'

// for animation

/**
* @author
* @function App
**/

const App = (props) => {
  useEffect(()=>{
      Aos.init({
        duration:1000
      })
  },[])
  return(
	<div>
    {/* <Hero />
    <Specializing />
    <Expertise />
    <LatestProjects />
    <Qualification />
    <Testimonials />
    <Footer /> */}
    <Counter />
  </div>
   )

 }

export default App