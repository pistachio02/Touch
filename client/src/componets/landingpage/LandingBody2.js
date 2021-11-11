import React from 'react'
import './LandingBody2.css'
import painting from '../../image/painting.png'



function LandingBody2() {
    return (
        <div className = 'background'>
            <div>
                <div className = 'mute'>#MUTE ALL</div>
                <div className = 'desc'> 
                지금은 잠시 멈춰두고 소리와 화면에 집중해 보세요 
                </div>
                <div className = 'desc2'>
                쌓였던 스트레스와 지쳤던 마음이 괜찮아 질거에요
                </div>
                <img src = {painting} alt = '' className = 'painting'/>
                
            </div>
          
        </div>
    )
}

export default LandingBody2
