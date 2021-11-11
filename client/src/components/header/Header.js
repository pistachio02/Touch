import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import touch from '../../image/tologo2.png'
import '../header/Header.css'
import { Move, Li, Ul, H3, Menu } from '../style/styled'
import * as AiIcons from 'react-icons/ai'


function Header({isLogin, userinfo, handleLogout }) {
    const [isOpen, setIsOpen] = useState(false)
    const openProfile = () => {
        setIsOpen(!isOpen)
    }


    if(userinfo){
        return (
            <div className = 'header-wrap'>
             <div>
            <div className="header-background">
            <div className="header-container">
            <Link to="/"><img src = {touch} alt = 'logo' className="logo"/></Link>
           
            <div className="grow"></div>
            <Link to="/heal" className="header-flex-box">Heal</Link>
            <Link to="/board" className="header-flex-box">Agora</Link>
              <div className="header-flex-box"> {userinfo.nickname} </div>
              <div className = 'settings'><AiIcons.AiOutlineSetting onClick = {openProfile}/></div>
                  <Menu open = {isOpen}>
                  <H3>
                  {userinfo.nickname}
                    <br />
                    
                  </H3>
                  <Ul>   
                    <Li>
                     <Link to = '/edit'>
                          <Move>내 정보 수정</Move >
                     </Link>
                     
                    </Li>
                    <Li>
                     <Link to = '/favorite'>
                          <Move>찜 목록</Move >
                     </Link>
                      
                    </Li>
                    <Li>
                      <Link to = '/written'>
                      <Move>내가 쓴글</Move >
                      </Link>
                      
                    </Li>
                    <Li>
                      <Move onClick={handleLogout}>로그아웃</Move >
                    </Li>
                  </Ul>
                </Menu>  
             </div>
           </div>
          </div>
            </div>
        )
    }else {
        return (
            <div className = 'header-wrap'>
                <div className="header-background">
              <div className="header-container">
              <Link to="/" ><img src={touch} alt="logo" className="logo"/></Link>
              <div className="grow"></div>
              <Link to = '/heal' className="header-flex-box">Heal</Link>
              <Link to = '/board' className="header-flex-box">Agora</Link>
              <Link to="/login" className="header-flex-box">Log in</Link>
              <Link to="/signup" className="header-flex-box">Sign Up</Link>
              </div>
              </div>
            </div>
          )
    }
    
}

export default Header