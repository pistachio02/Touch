import React from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import "./UserEdit.css"


function UserDelete() {

    const history = useHistory();

    const deleteUser = () => {
        swal({
            title: '안돼요ㅠㅠ가지마세요ㅠㅠ',
            text: '정말 가실건가요..?😢',
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
                            text: '잘가요 내 소중한 사랑, 행복했어요..',
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
                swal({
                    title: '잘 생각하셨어요!!😆 🎉',
                    text: '조금만 더 힐링하고 가세요~👍🏻',
                    icon: 'success',
                    closeOnClickOutside: false,
                })
            }
		})
        .catch((err) => {
            console.log(err);
        })
	}

    const style = {
        color:'red'
    }


    return (
        <div>
            <section className="user_background">
                <div className="user_container">

                <form className="user_form_center">
            <h1>
            회원 탈퇴를 하시겠습니까?
            </h1>
            <h3 style={style}>
            회원 탈퇴시 모든 정보가 삭제 됩니다.
            </h3>

            <button 
            type="button"
            className="user_delete_btn"
            onClick={deleteUser}>회원탈퇴</button>
            
            </form>
            </div>
            </section>
        </div>
    );
}

export default UserDelete
