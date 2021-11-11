import React from 'react'
import { ModalBackdrop } from '../style/styled'
import SignupModal from './SignupModal'


function Signup() {

    return (
        <div>
            <ModalBackdrop >
                <SignupModal/>
            </ModalBackdrop>
        </div>
    )
}

export default Signup
