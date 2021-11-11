import React from 'react'
import { Indicator, ScrollDown } from '../style/styled'
import './LandingBody1.css'


function LandingBody1() {

    return (
        <div className = 'landing-wrap'>
            <div className = 'landing-text'>
                <div className = 'touch'>
          T o u c h
           </div>
           <p className = 'landing-p'>이미지와 소리로 마음의 안정을 찾아보세요</p>
            </div>
            <div className = 'scroll'>
             <ScrollDown>
               <Indicator/>
               <Indicator/>
               <Indicator/>
           </ScrollDown>
            </div>

        </div>

    )
}

export default LandingBody1