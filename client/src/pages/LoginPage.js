import React from 'react'
// import Header from '../components/header/Header'
import LandingHome from '../components/landingpage/LandingHome'
import Login from '../components/login/Login'


function LoginPage({ handleResponseSuccess }) {
    return (
        <div>
            <LandingHome/>
            <Login handleResponseSuccess={handleResponseSuccess} />
        </div>
    )
}

export default LoginPage
