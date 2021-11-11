import React from 'react'
import { Link } from 'react-router-dom'
import "../maincss/MypageSidebar.css"



function MypageSidebar() {
    return (
        <div className="mypage_sidebar">
            <div className="mypage_container">
                <h1 className="mypage_text">마이페이지</h1>
        <Link  to = "/edit"><button className="mypage_btn">기본정보 변경</button></Link>
        <Link  to = "/edit/delete"><button className="mypage_btn">회원 탈퇴</button></Link>
       
    </div>
        </div>
    )
}

export default MypageSidebar
