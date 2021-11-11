import React from 'react'
import './Footer.css'
import logo from '../../image/tologo2.png'

function Footer() {
    return (
        <div className ='background7'>
            <div className ='logo-text-wrap'>
                <div className ='logo-wrap'>
                    <img src = {logo} alt = '' className ='footer-logo' />
                </div>
                <div className = 'text-area'>
                    <div className = 'contact-wrap'>
                        <div className = 'contact'>CONTACT</div>
                        <a className = 'a-contact' href = 'https://github.com/codestates/Touch'>TOUCH</a>
                    </div>
                    <div className = 'about-us-wrap'>
                        <div className = 'about-us'>ABOUT US</div>
                        <a className = 'a-about-us'>Repository</a>
                        <br/>
                        <a className = 'a-about-us'>Wiki</a>
                    </div>
                    <div className = 'team-member-wrap'>
                        <div className = 'team-member'>
                            TEAM MEMBERS
                        </div>
                        <div className = 'team'>
                            <a className = 'a-team-front' href = 'https://github.com/off-dngw'>DongWoo Kim @github</a>
                            <br/>
                            <a className = 'a-team-front' href = 'https://github.com/Geonwoo-Lee'>GeonWoo Lee @github</a>
                            <br/>
                            <a className = 'a-team-front' href = 'https://github.com/leejanghe'>JangHee Lee @github</a>
                            <br/>
                            <a className = 'a-team-front' href = 'https://github.com/pistachio02'>JongHwa Jeong @github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
