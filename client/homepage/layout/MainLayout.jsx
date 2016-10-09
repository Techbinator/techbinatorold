import React,{Component} from 'react'
import Navbar from '../components/Navbar.jsx'
import Slider from '../components/Slider.jsx'
import Team from '../components/Team.jsx'
import Timeline from '../components/Timeline.jsx'
import {Features1, Features2, Features3, Features4} from '../components/Features.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Pricing from '../components/Pricing.jsx'
import Contact from '../components/Contact.jsx'

import 'animate.css'
import 'wowjs'

export class HomepageLayout extends Component {
   componentDidMount(){
     new WOW().init()
   }
   render(){
     return(
       <div id="page-top" className="landing-page">
         <Navbar />
         <Slider />
         <Features1 />
         <Features2 />
         <Team />
         <Features3 />
         <Timeline />
         <Testimonials />
         <Features4 />
         <Pricing />
         <Contact />
       </div>
     )
   }
}
