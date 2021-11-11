import React from 'react'
import './LandingBody6.css'
import Lottie from 'react-lottie'
import * as last from  '../../pages/loadingpage/last.json'
import { LastButton } from '../style/styled'
import { Link } from 'react-router-dom'



const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: last.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

function LandingBody6() {
    return (
        <div className ='background6'>
            <div className ='text-lottie-wrap'>
                 <div className = 'text'>
                지금 TOUCH에서
                <br/>
                마음의 짐을 덜어내고 쉬면서
                <br/>
               새롭게 나아가세요
            </div>
            <div className = 'lottie'>
                <Lottie options = {defaultOptions} height = {600} width = {800} speed = {2} />
            </div>
            </div>
           <div className = 'button-wrap'>
               <Link to="/heal"><LastButton>TOUCH 하러가기</LastButton></Link>
               <Link to="/board"><LastButton className ='right-button'>AGORA로 가기</LastButton></Link>
           </div>
        </div>
    )
}

export default LandingBody6
