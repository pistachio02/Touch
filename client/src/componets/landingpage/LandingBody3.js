import React from 'react'
import './LandingBody3.css'
import example from '../../image/example.gif'

function LandingBody3() {
    return (
        <div className = 'background3'>
            <div className = 'img-text-wrap'>
                <img src = {example} alt  = '' className = 'img'/>
                <div className = 'text-wrap'>
                    <div className = 'start'>#START TOUCH</div>
                    <div className = 'text-h1'>원하는 이미지와 소리를
                    <br/> 찾아보세요.</div>
                    <div className = 'text-p'>원하는 이미지와 사운드를 들어 보고 
                        <br/>
                        오늘의 기분에 더 맞는 이미지와 사운드를 Touch 하시면
                        <br/> 전체화면으로도 즐길 수 있고 
                        <br/>
                        나중에 다시 그 이미지와 사운드가 듣고 싶을때에 
                        <br/>
                        찜하기를 눌러 다시 보실 수 있습니다</div>
                </div>
            </div>
        </div>
    )
}

export default LandingBody3
