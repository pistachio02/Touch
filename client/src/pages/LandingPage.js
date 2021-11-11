import React from 'react'
import LandingHome from '../components/landingpage/LandingHome'

function LandingPage({isLogin, userinfo, handleLogout}) {
    return (
        <div>
            <LandingHome userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout} />
        </div>
    )
}

export default LandingPage
