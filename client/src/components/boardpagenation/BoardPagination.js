import React, { useState, useEffect } from 'react';
//페이지네이션 CSS 위치
import './PaginationStyled.css'

const BoardPagination = ({currentPage, totalPage, onMove}) => {
    const [list, setList] = useState([])

    useEffect(() => {
        const list = Array.from({length: totalPage}, (_, i) => i + 1)
        setList(list)

    }, [currentPage, totalPage])

    const movePage = (e, pageNo) => {
        // 이벤트 전파 방지 
        e.preventDefault()
        // 부모 컴포넌트에게서 전달받은 함수 호출
        onMove(e, pageNo)
    }


    return (
        <div className ="pagination-container">
                <ul className ="pagination">
                {list.map(item => 
                    <li className ="li-container"
                    key={item}
                        onClick={(e) => movePage(e, item)} 
                        active={item === currentPage}
                    >   
                       <a href = "1" className="num"> {item} </a>
                    </li>   
                )}
                </ul>
        </div>
    )
}

export default BoardPagination