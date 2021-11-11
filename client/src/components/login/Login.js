import React from 'react'
import { ModalBackdrop } from '../style/styled'
import './Login.css'
import LoginModal from './LoginModal'

function Login({ handleResponseSuccess }) {

    return (
        <div>
            <ModalBackdrop >
                <LoginModal handleResponseSuccess={handleResponseSuccess} />
            </ModalBackdrop>
            
        </div>
    )
}

export default Login
