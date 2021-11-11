import React from 'react'
import './LandingBody4.css'
import example from '../../image/example.gif'

function LandingBody4() {
    return (

            <div className = 'background4'>
            <div className = 'body4-img-text-wrap'>
                 <img src = {example} alt  = '' className = 'body4-img'/>
                <div className = 'body4-text-wrap'>
                    <div className = 'body4-start'>#START AGORA</div>
                    <div className = 'body4-text-h1'>아고라에서 익명의 사람들과 <br/>고민을 나누어 보세요</div>
                    <div className = 'body4-text-p'>누구나 마음속에는 꺼내지 못할 이야기들이 있습니다.
                    <br/>
                    
                    누군가에게 말하지 못할 고민이나
                    <br/>
                     속으로 끙끙 앓고 있던 것들을
                     <br/>
                      익명의 사람들과 이야기 해보세요. 
                      <br/>
                      기분이 조금이나마 더 나아질꺼에요.</div>
                       
                </div>
                
            </div>
        </div>
    )
}

export default LandingBody4
