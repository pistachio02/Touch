import React, {useState} from 'react'
import { ModalView, StyledButton} from '../style/styled'
import Input from './Input'
import {Link} from 'react-router-dom'
import axios from 'axios'
import kakao from '../../image/kakao.png'
import google from '../../image/google.png'
import { useHistory } from 'react-router-dom'
import * as GrIcons from 'react-icons/gr'

function LoginModal({ handleResponseSuccess }) {
    const moveToMain = () => {
        history.push('/')
    }
    const history = useHistory()
    const [isValidationMessage, setIsValidationMessage] = useState('')
    const [userinfo, setuserinfo] = useState({
        email: '',
        password: ''
    });

    const handleInputValue = (key) => (e) => {
        setuserinfo({ ...userinfo, [key]: e.target.value });
    };

    const handleLogin = () => {
    
        const { email, password } = userinfo
    
        axios
          .post(
              'https://localhost:4000/login',
              { email, password },
              { headers: {
                 "Content-Type": "application/json" },
                withCredentials: true }
          )
          .then((res)=>{
              if(res.data === 'Invalid E-mail!'){
                  setIsValidationMessage('등록된 이메일이 아닙니다')
              }else if (res.data === 'Invalid Password!'){
                  setIsValidationMessage('비밀번호가 일치하지 않습니다')
              }else{
                setIsValidationMessage('')
                handleResponseSuccess()
                history.push('/')
              }
              
          })
          .catch((err)=>console.log(err))
    };

    const KAKAO_LOGIN_URL = 'https://kauth.kakao.com/oauth/authorize?client_id=cd907f22e063b6c7cee0fe2befb6140f&redirect_uri=http://localhost:3000/&response_type=code'
    const kakaoLoginHandler = async () => {
        window.location.assign(KAKAO_LOGIN_URL);
    }

    const GOOGLE_LOGIN_URL = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=1085457130769-nv16h3a5ug5b1fml2467muf8cqevg0t9.apps.googleusercontent.com&redirect_uri=http://localhost:3000/&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email&include_granted_scopes=true'
    const googleLoginHandler = async () => {
        window.location.assign(GOOGLE_LOGIN_URL);
    }

    return (
        <div>
            <ModalView>
               <div>
               <div className = 'close-icon' onClick = {moveToMain}>
                <GrIcons.GrFormClose/>
            </div>
                    <h1 className = 'login-h1'>Touch</h1>
                    <div className = 'login-h2'>Login</div>
                    <Input className = 'email'
                      label="email"
                      type="email"
                      onChange = {handleInputValue("email")}
                      value = {userinfo.email}
                     />
                     <Input className = 'password'
                   label="password"
                    type="password"
                    onChange = {handleInputValue("password")}
                    value = {userinfo.password}
                     />
                     <div className = 'validation'>{isValidationMessage}</div>
                     <StyledButton onClick={handleLogin}>로그인</StyledButton>
                     <div className = 'social-text'>소셜 계정으로 간편하게 로그인 하세요 !</div>
                     <div className = 'social-login'>
                         <img src = {kakao} alt = 'social-login' className = 'social-kakao' onClick={kakaoLoginHandler} />
                     <img src = {google} alt = 'social-login'className = 'social-google' onClick={googleLoginHandler} />
                     </div>
                     <p>아직 회원이 아니신가요 ?</p>
                     <Link to = '/signup' className = 'link'><div className = 'move-to-signup'>회원가입하기</div></Link>
                     
               </div>
               {/* {console.log(userinfo.email)}
               {console.log(userinfo.password)} */}
              
            </ModalView>
        </div>
    )
}

export default LoginModal