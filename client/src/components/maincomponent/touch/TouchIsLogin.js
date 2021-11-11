import React from 'react'
import {Link} from 'react-router-dom'
import '../maincss/TouchIsLogin.css'

function TouchIsLogin() {
    return (
        <div className="islogin_background">
         
            <div className="islogin_contanier">
            <h1>로그인이 필요한 페이지 입니다.</h1>
            <h3>로그인을 하시겠습니까 ?</h3>
            <div>
            <Link to="/login" ><button className="islogin_btn hover">로그인</button></Link>
            
            <Link to="/heal/moveimg"><button className="islogin_btn hover">취소</button></Link>

            </div>
            </div>
</div>
    )
}

export default TouchIsLogin
