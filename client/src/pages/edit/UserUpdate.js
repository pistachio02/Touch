import React,{useState,useEffect} from 'react';
// import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {isPassword} from '../../components/utills/isEmail'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

const UserUpdate = ({userinfo}) => {


	const [isValidate, setIsValidate] = useState(false)
    const [errMsg, setErrMsg] = useState('');
	const [userForm, setUserForm] = useState({
		nickname: "",
		password: "",
		password2: ""
	})
	let nickname = "";
	let password = "";
	let password2 = "";

	const handleForm = (key) => (e) => {

		if(key === 'nickname') {
			nickname = e.target.value;

			setUserForm({...userForm, nickname})
		} else if(key === 'password') {
			password = e.target.value;

			if(!isPassword(password)){
				return setErrMsg('비밀번호 형식에 맞지 않습니다 !')
			} else {
				setUserForm({...userForm, password})
				return setErrMsg('')
			}
		} else if(key === 'password2') {
			password2 = e.target.value;

			if(password2 !== userForm.password) {
				return setErrMsg('비밀번호가 일치하지 않습니다 !')
			} else if(password2 === userForm.password) {
				setUserForm({...userForm, password2})
				setIsValidate(true)
				return setErrMsg('')
			}
		}
		
    };

	const updateUser = () => {
		if(userForm.nickname.length === 0 || userForm.password.length === 0 || userForm.password2.length === 0) {
            setIsValidate(false)
            setErrMsg('모든 항목을 입력하여야 합니다 !')
        } else if(isValidate){
			axios
				.post('https://localhost:4000/edit', { userForm }, { withCredentials: true })
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

	if(userinfo){
		return (
			<div>
				<section className="user_background">
					<div className="user_container">

					<form>
				<h2>{userinfo.nickname} 님의 회원 정보 수정</h2>

				<div>
					<div className="user__text">닉네임 변경</div>
					<input 
					className="form-input"
					placeholder="새로운 닉네임을 입력해주세요"
					type = "text" 
					name ="nickname" 
					onChange={handleForm("nickname")}
					></input>
				</div>

				<div>
					<div className="user__text" >새 비밀번호</div>
					<input 
					className="form-input"
					placeholder="새로운 비밀 번호를 입력해주세요"
					type = "password" 
					name ="password" 
					onChange={handleForm("password")}
					></input>
				</div>

				<div>
					<div className="user__text" >비밀번호 확인</div>
					<input 
					className="form-input"
					placeholder="새로운 비밀 번호를 확인 해주세요"
					type = "password" 
					name ="password2" 
					onChange={handleForm("password2")}
					></input>
				</div>

				<div className = 'mypage_validation'>{errMsg}</div>
				<button 
				type="button"
				className="user_update_btn"
				onClick={updateUser}>수정</button>

				<Link to='/'><button
				className="user_update_btn"
				>취소</button></Link>

				</form>
				</div>
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