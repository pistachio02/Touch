import React, {useState} from 'react'
import axios from 'axios';
import Input from '../login/Input'
import {Link, useHistory } from 'react-router-dom'
import { ModalView, StyledButton} from '../style/styled'
import './Signup.css'
import {isEmail, isPassword} from '../utills/isEmail'
import swal from 'sweetalert'
import * as GrIcons from 'react-icons/gr'

function SignupModal() {
    const moveToMain = () => {
        history.push('/')
    }
    const [isValidate, setIsValidate] = useState(false)
    const [isValidationMessage, setIsValidationMessage] = useState('')
    const [userinfo, setuserinfo] = useState({
        nickname: '',
        email: '',
        password: '',
    });
	let nickname = "";
    let email = "";
	let password = "";

    const history = useHistory();

    const handleInputValue = (key) => (e) => {


        if(key === 'nickname') {
			nickname = e.target.value;

			setuserinfo({...userinfo, nickname})
		} else if(key === 'email') {
			email = e.target.value;

			if(!isEmail(email)){
				return setIsValidationMessage('이메일 형식에 맞지 않습니다.')
			} else {
				setuserinfo({...userinfo, email})
				return setIsValidationMessage('')
			}
		} else if(key === 'password') {
			password = e.target.value;

			if(!isPassword(password)) {
				return setIsValidationMessage('비밀번호는 4자 이상, 영문과 숫자여야 합니다.')
			} else if(isPassword(password)) {
				setuserinfo({...userinfo, password})
				setIsValidate(true)
				return setIsValidationMessage('')
			}
		}

    };

    const handleSignup = () => {
        if(userinfo.nickname.length === 0 || userinfo.email.length === 0 || userinfo.password.length === 0    ){
            setIsValidate(false)
            setIsValidationMessage('모든 항목을 입력하여야 합니다')
        }else if(isValidate){
            const { email, password, nickname } = userinfo
        axios.post(
            "https://localhost:4000/register",
            { email, password, nickname },
            { 
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            }
        )
        .then((res) => {
           if(res.data === 'E-mail Already Exists!'){
            setIsValidate(false)
            setIsValidationMessage('중복된 이메일 입니다.')
           }else if(res.data === 'Nickname Already Exists!'){
            setIsValidate(false)
            setIsValidationMessage('중복된 닉네임 입니다.')
           }else{
             swal("회원가입이 완료되었습니다 !", '', "success")
             .then(() => history.push('/login'))
           }
        })
        .catch((err)=>console.log(err))
        }
        
    };
   


    return (
        <div>
        <ModalView>
        <div>
            <div className = 'close-icon'>
                <GrIcons.GrFormClose onClick = {moveToMain}/>
            </div>
             <div className = 'signin-h1'> Touch</div>
             <div className = 'signin-h2'>Sign Up</div>
             <Input className = 'signin-password'
            label="Nickname"
             type="text"
             onChange = {handleInputValue('nickname')}
             value = {userinfo.nickname}
              />
             <Input className = 'signin-email'
               label="email"
               type="email"
               onChange = {handleInputValue('email')}
               value = {userinfo.email}
              />
              <Input className = 'signin-password'
            label="password"
             type="password"
             onChange = {handleInputValue('password')}
             value = {userinfo.password}
              />
              <div className = 'validation'>{isValidationMessage}</div>
              <StyledButton onClick={handleSignup}>회원가입</StyledButton>
              <p className = 'sign-up-p'>이미 회원 이신가요 ?</p>
              <Link to = '/login' className = 'link'><div className = 'move-to-signup'>로그인 하기</div></Link>
        </div>
       {/* {console.log(userinfo.email)}
       {console.log(userinfo.password)} */}
     </ModalView>   
        </div>
    )
}

export default SignupModal