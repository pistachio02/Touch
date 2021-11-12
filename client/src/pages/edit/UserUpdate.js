import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {isPassword} from '../../components/utills/isEmail'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import { MypageView, MypageModal, NicknameView, InputField, PasswordView, PasswordInputField } from './styled'
import head from './image/head.png'
import * as BsIcons from 'react-icons/bs'
import {useHistory} from 'react-router-dom'
import './UserEdit.css'

const UserUpdate = ({userinfo}) => {
	const history = useHistory();
	const [isNicknameChange, setIsNicknameChange] = useState(false)
	const [isPasswordChange, setIsPasswordChange] = useState(false)
	const [userNickname, setUserNickname] = useState('')
	const [userPassword, setUserPassword] = useState('')
	const [userPasswordCheck, setUserPasswordCheck] = useState('')


	const [isValidate, setIsValidate] = useState(false)
	const [isPasswordValidate, setIsPasswordValidate] = useState(false)
    const [errMsg, setErrMsg] = useState('');
	let nickname = "";
	let password = "";
	let password2 = "";

	const deleteUser = () => {
        swal({
            title: '회원탈퇴 하시겠습니까?',
            text: '회원 탈퇴 시 데이터를 복구 할 수 없습니다',
            icon: 'warning',
            closeOnClickOutside: false,
            buttons: {
                confirm: {
                    text: "확인",
                    value: true
                },
                cancle: {
                    text: "취소",
                    value: false
                }
            }
        })
        .then((res) => {
            if(res === true) {
                axios
                    .delete('https://localhost:4000/unregister', { withCredentials: true })
                    .then(() =>{
                        swal({
                            title: '회원탈퇴가 완료되었습니다.',
                            icon: 'success'
                        })
                        .then(() => {
                            history.push('/');
                            window.location.reload();
                        })
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } else if(res === false) {
                history.push('/edit')
            }
		})
        .catch((err) => {
            console.log(err);
        })
	}
	const userPasswordCheckHandler = (e) => {
		password2 = e.target.value
		if(userPassword !== password2){
			setErrMsg('비밀번호와 비밀번호 확인이 일치하지 않습니다')
			setIsPasswordValidate(false)
		}else if (userPassword === password2){
			setErrMsg('')
			setIsPasswordValidate(true)
			setUserPasswordCheck(password2)
		}
	}
	const userPasswordHandler = (e) => {
		password = e.target.value
		if(!isPassword(password)){
			setIsPasswordValidate(false)
			setErrMsg('비밀번호는 4글자 이상 영문 숫자를 포함하셔야 합니다')
		}else if(isPassword(password)){
			setErrMsg('')
			setUserPassword(password)
		}

	}
	const handlePasswordModal = () => {
		setIsPasswordChange(!isPasswordChange)
		setErrMsg('')
	}
	const userNicknameHandler = (e) => {
		nickname = e.target.value
		setUserNickname(nickname)
		setIsValidate(true)
	}
	const handleNicknameModal  = () => {
		setIsNicknameChange(!isNicknameChange)
		setErrMsg('')
	}

	const updateUser = () => {
		if(userNickname.length === 0) {
            setIsValidate(false)
            setErrMsg('모든 항목을 입력하여야 합니다 !')
			
        } else if(isValidate){
			axios
				.post('https://localhost:4000/nickname', { userNickname }, { withCredentials: true })
				.then((res) => {
					if(res.data === "Nickname Is Being Used By Other User!"){
						setErrMsg("이미 사용중인 닉네임입니다 !")
					} else {
						swal({
							title: '수정 완료!',
							text: '닉네임과 비밀번호가 성공적으로 수정되었습니다!',
							icon: 'success'
						})
						.then(() => {
							window.location.reload();
						})
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}

	const changePw = () => {
		if(userPassword.length === 0 || userPasswordCheck.length === 0)  {
            setIsPasswordValidate(false)
            setErrMsg('모든 항목을 입력하여야 합니다 !')
        } else if(isPasswordValidate){
			axios
				.post('https://localhost:4000/password', { userPassword }, { withCredentials: true })
				.then((res) => {
					if(res.data === 'Your Password Is Same As The Old One!'){
						setErrMsg("현재 비밀번호를 입력 하셨습니다 !")
					} else {
						swal({
							title: '수정 완료!',
							text: '닉네임과 비밀번호가 성공적으로 수정되었습니다!',
							icon: 'success'
						})
						.then(() => {
							window.location.reload();
						})
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}

	if(userinfo){
		return (
			<div>
				<section className="user_background">
					<MypageView>
				{isNicknameChange 
				? 
				<NicknameView userinfo = {userinfo}>
					<div className = 'nickname-change-message'>변경하실 닉네임을 입력해 주세요</div>
					<InputField
      type="text"
      name="userNickname"
      value={userNickname}
      onChange={userNicknameHandler}
    />
	<div className="err-msg">{errMsg}</div>
	<div className = 'mypage-button-wrap'>
		<button className = 'nickname-cancle' onClick = {handleNicknameModal} >취소</button>
		<button className = 'nickname-okay' onClick = {updateUser}>확인</button>
	</div>
				</NicknameView> 
				: null}
				{isPasswordChange ? <PasswordView userinfo = {userinfo}>
					<div className = 'nickname-change-message'>변경하실 비밀번호와 비밀번호 확인란을 입력해주세요</div>
					<PasswordInputField
      type="password"
      name="userPassword"
    //   value={userPassword}
      onChange={userPasswordHandler}
    />
	<PasswordInputField
      type="password"
      name="userPasswordCheck"
    //   value={userPasswordCheck}
      onChange={userPasswordCheckHandler}
    />
	<div className="err-msg">{errMsg}</div>
	<div className = 'password-button-wrap'>
		<button className = 'password-cancle' onClick = {handlePasswordModal} >취소</button>
	    <button className = 'password-okay' onClick = {changePw}>확인</button>
	</div>
	
				</PasswordView> : null }
						<MypageModal>
							<div>
							<img src = {head} alt = '' className = 'head'/>
							<div className = 'mypage-text'>
								<div className = 'user-info'>
									<div className ='nickname-pencil'>
										<div className = 'mypage-nickname'>
											닉네임 : {userinfo.nickname}
										</div>
										{console.log(nickname)}
										<div className = 'pencil' onClick = {handleNicknameModal}>
											<BsIcons.BsPencil/>
									</div>
									<div className ='mypage-email'>
											이메일 : {userinfo.email}
									</div>
									</div>
									<div className = 'change-delete'>
										<div className = 'change-password' onClick = {handlePasswordModal} >비밀번호 변경</div>
										<div className = 'delete-user' onClick = {deleteUser}>회원탈퇴</div>
									</div>
								</div>
							</div>
							</div>
						
						</MypageModal>
					</MypageView>
				</section>
			</div>
		);
	} else {
		return (
			<div></div>
		)
	}
};

export default UserUpdate;