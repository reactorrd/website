import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Stats from './Components/Stats'
import Business from './Components/Business'
import Testimonials from './Components/Testimonials'
import Clients from './Components/Clients'
import CTA from './Components/CTA'
import Footer from './Components/Footer'
import styles from './style'

const App = () => (
    <div 
      className='bg-primary w-full overflow-hidden'
    >
      <div 
        className={`${styles.paddingX} ${styles.flexCenter}`}
      >
        <div 
          className={`${styles.boxWidth}`}
          >
          <Navbar/>
        </div>
      </div>

      <div 
        className={`bg-primary ${styles.flexStart}`}
      >
        <div 
          className={`${styles.boxWidth}`}
        >
          <Hero/>
        </div>
      </div>

      <div 
        className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
      >
        <div 
          className={`${styles.boxWidth}`}
        >
          <Stats/>
          <Business/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>

    </div>
)

export default App
