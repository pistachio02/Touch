import React, { useState, useEffect } from 'react';
import { Link , useHistory } from 'react-router-dom';
import BoardPagination from '../../components/boardpagenation/BoardPagination'
import axios from 'axios'
import './WrittenStyled.css'
import noface from '../board/image/noface.png'

// 내가 쓴글 목록 입니다.
// CSS는 제가 한번 해결해보도록 하겠습니다.


const WrittenBoard = () => {
    const history = useHistory()
    // 게시글 목록 state
    const [list, setList] = useState([])
    // 현재 페이지 번호
    const [currentPage, setCurrentPage] = useState(1)
    // 전체 페이지 갯수
    const [totalPage, setTotalPage] = useState(1)
    // 컴포넌트가 마운트될 때, 또는 currentPage 값이 변경되면 실행
    useEffect(() => {
        // 게시글 목록 호출
        async function fetchData() {
            try {
                const resp = await axios.get(`https://localhost:4000/myposts?page=${currentPage}`, {withCredentials: true})
                const data = resp.data
                setList([...data.list])
                setTotalPage(data.info.totalPage)
                // history.push('/written')
            } catch (error) {
                console.error(error)
                alert('데이터를 불러오지 못했습니다.')
            }
        }
        fetchData()
    }, [currentPage])

    

    // 클릭한 페이지 번호를 저장
    const movePage = (e, pageNo) => {
        // 현재 페이지가 변경되면 게시글 목록 호출 함수가 트리거 된다.
        setCurrentPage(pageNo)
    }

    return (
        <>
            <div className ="cardWrap1">   
            
                {list.map(el => 
                   <Link to={`board/view/${el.id}`}>
                    <div className="card11"> 
                        <div key={el.id}>
                         
                                <div className="card-header1"></div>
                                <div className="card-body-header1">
                                    <div className = 'someone1'>
                                         <img src = {noface} alt = ''/>
                                        <div className = "board-user1">{el.user_nickname}</div>
                                    </div>
                                    <div className="board-title1">{el.title}</div>
                                    <div className = 'board-content1'>{el.content}</div>
                                </div>
                                <div className ="card-body-footer1">
                                    <i className ="reg_date1">{el.createdAt}</i>
                                </div>
                        </div>
                    </div>
                    </Link>
                )}
            </div>
            {list.length > 0 && (
                <BoardPagination currentPage={currentPage} totalPage={totalPage} 
                onMove={movePage} />
            )}
       </>
    )
}

export default WrittenBoard