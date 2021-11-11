import React from 'react'
import Header from '../header/Header'
import Footer from './Footer'
import GoTop from './GoTop'
import LandingBody1 from './LandingBody1'
import LandingBody2 from './LandingBody2'
import LandingBody3 from './LandingBody3'
import LandingBody4 from './LandingBody4'
import LandingBody5 from './LandingBody5'
import LandingBody6 from './LandingBody6'



function LandingHome({isLogin, userinfo, handleLogout }) {
  
    return (
        <div>
          <Header userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout} />
          <GoTop/>
          <LandingBody1/>
          <LandingBody2/>
          <LandingBody3/>
          <LandingBody4/>
          <LandingBody5/>
          <LandingBody6/>
          <Footer/>
        </div>
    )
}

export default LandingHome
