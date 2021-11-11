import { Link, useParams, useHistory } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { isEmpty } from '../../components/boardpagenation/index';
import swal from 'sweetalert';
import '../board/css/ViewStyled.css';

import noface from '../board/image/someone2.png'
import { BoardModalView }  from '../board/css/styled'
import * as AiIcons from 'react-icons/ai'
import noface1 from '../board/image/noface.png'

// 내가 쓴 글 에서 history push 중복으로 인해 
// 파일을 재 사용 해야 합니다.
// 나중에 새로 통합 하고 수정할 때 변경을 다시 해보겠습니다.

const BoardView = ({isLogin ,userInfo}) => {
    // history 객체 로드 
    const history = useHistory()
    // route 에 지정한 id 파라미터
    const { id } = useParams()
    // 게시글 데이터 
    const [data, setData] = useState({})
    // 댓글 리스트 
    const [comments, setComments] = useState([])
    const [content, setContent] = useState('')

    const handleChangeMsg = (e) =>{
        setContent(e.target.value);
    }
    // 코멘트 불러오기
    const fetchComments = useCallback(async () => {
        try {
            const resp = await axios.get(`https://localhost:4000/view/${id}/comments`)
            setComments(resp.data.commentInfo)
        } catch (error) {
            console.error('댓글 데이터를 불러올 수 없습니다. error=>', error)
        }
    }, [id])
    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const resp = await axios.get(`https://localhost:4000/board/view/${id}`)
                    setData(resp.data.postInfo)
                } catch (error) {
                    console.error('게시글 데이터를 불러올 수 없습니다. error=>', error)
                }
            }
            fetchData()
            fetchComments()
        }
    }, [id, fetchComments])
    // 댓글 저장
    const writeComment = async (e) => {
        // const content = prompt('댓글을 입력하세요.', '')
        
        if (content === null) {
            return
        }
        if (isEmpty(content)) {
            return swal('댓글이 입력되지 않았습니다.')
        }

        try {
            await axios.post(`https://localhost:4000/board/write/comment`, {
                boardId: id,
                content: content
            }, { withCredentials: true })
            fetchComments()
            return swal('댓글을 저장하였습니다.')

        } catch (error) {
            swal('댓글을 저장하지 못했습니다.')
        }
    }
    // 댓글 삭제 
    const deleteComment = async (commentId) => {
        if (!window.confirm('댓글을 삭제하시겠습니까?')) {
            return
        }
        try {
            await axios.post(`https://localhost:4000/board/delete/comment`, {
                id: commentId,
            }, { withCredentials: true })
            .then((res) => {
                if(res.data === 'Not Allowed!') {
                    return alert('작성자만 삭제가 가능합니다.')
                }
            })
            fetchComments()

        } catch (error) {
            swal('댓글을 삭제하지 못했습니다.')
        }
    }

    // 게시글 삭제
    const deleteData = async (e) => {
        if (!window.confirm('게시글을 삭제하시겠습니까?')) {
            return
        }
        try {
            await axios.post(`https://localhost:4000/board/delete`, {
                id: id,
            }, { withCredentials: true })
            .then((res) => {
                if(res.data === "Post Successfully Deleted!") {
                    swal('게시글을 삭제했습니다.')
                    history.push("/written")   
                } else if(res.data === "Not Allowed!") {
                    swal('작성자만 삭제가 가능합니다.')
                } else {
                    return null;
                }
            })
        } catch (error) {
            swal('게시글을 삭제하지 못했습니다.')
        }
    }
    // 게시글 수정 페이지로 이동
    const modifyData = (e) => {
        history.push(`/board/write/${id}`)
    }

    return (
      
        <div className = 'board-background'>
            <BoardModalView>
                <div className = 'view-wrap'>
                      <div className = 'view-arrow'>
                    <Link to="/board">
                <AiIcons.AiOutlineArrowLeft/>
                </Link>
                </div>
                
              <div className ="list-container">
                <div className = "List-wrap">
                       <div className = 'view-someone'>
                   <img src = {noface} alt = '' className = 'view-img'/>
                    <div className = 'view-user'>{data.user_nickname}</div>
                </div>
                <div className = 'view-content'>
                     <div className ="list-title">{data.title}</div>
                <div className = "list-content">{data.content}</div>
                </div>
                <div className = 'edit-delete'>
                    <div className="update-button" onClick={modifyData}>수정</div>
                    <div className="delete-button" onClick={deleteData}>삭제</div>
                </div>
            </div>
            </div>
            <div>

            </div>
            <div className = "comments-form">
                <div className = 'reply-text'>댓글 남기기</div>
                <div className = 'comments-btn-text'>
                     <input type ="text" className="comments-input" onChange={handleChangeMsg} placeholder ="댓글을 입력하세요"></input> 
                <button className ="commtents-btn" onClick ={writeComment}>등록</button>   
                </div>
               
            </div>
            <div className= "comments-container">
            {comments.length > 0 && (
                <div className="comments-header">
                    {comments.map(item => 
                        <div  className="comments-list" key={item.id}>
                            <div className = 'reply-wrap'>
                                <div className = 'someone2'>
                                    <img src = {noface1} alt = '' />
                                    <div>{item.user_nickname}  </div>
                                </div>
                            <div className = 'comment-content-wrap'>
                                <div className = 'comment-comment'>{item.content}  </div>
                                <div className = 'comment-date'>  2021.11.10 </div>
                            </div>
                            
                            </div>
                            <div className ="comment-delete"  onClick={() => deleteComment(item.id)}>삭제</div>
                        </div>
                    )}
                </div>
            )}
           </div>
                </div>
              
             </BoardModalView>
          
        </div>
    )
}

export default BoardView