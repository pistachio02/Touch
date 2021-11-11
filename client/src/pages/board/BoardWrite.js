import { Link, useHistory, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { isEmpty } from '../../components/boardpagenation/index'
import '../board/css/WriteStyled.css'
import swal from 'sweetalert'
import { BoardModalView } from './css/styled';


const BoardWrite = props => {
    const history = useHistory()
    const { id } = useParams()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get(`https://localhost:4000/board/view/${id}`)
                const data = resp.data.postInfo;
                setTitle(data.title)
                setContent(data.content)
            } catch (error) {
                console.error('게시글 데이터를 불러올 수 없습니다. error=>', error)
            }
        }

        if (id) {
            fetchData()
        }

    }, [id])

    const submitForm = async (e) => {
        e.preventDefault()

        if (isEmpty(title)) {
            return swal('제목을 입력해주세요.')
        }
        if (isEmpty(content)) {
            return swal('내용을 입력해주세요.')
        }
        
        try {
            await axios.post('https://localhost:4000/board/write', {
                id: id,
                title: title,
                content: content
            }, { withCredentials: true })
            .then((res) => {
                if(res.data === 'Not Allowed!') {
                    swal('작성자만 수정이 가능합니다.')
                    history.push(`/board/view/${id}`)
                } else if(res.data === "Post Successfully Updated!"){
                    swal('수정되었습니다.')
                    history.push(`/board/view/${id}`)
                } else if(res.data === "Post Successfully Posted!") {
                    swal('등록되었습니다.');
                    history.push("/board")
                } else {
                    return null;
                }
            })
        } catch (error) {
            alert('데이터를 저장하지 못했습니다.')
            history.push("/board")
        }
        
    }

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }
    const changeContent = (e) => {
        setContent(e.target.value)
    }

    return (
    <div className ='write-back'>
        <BoardModalView>
                   <form className ="boardContainer" onSubmit={submitForm}>
                <form className="boardHeader1" >
                    <input className="board-input" type="text" placeholder="제목을 입력해주세요" value={title} onChange={changeTitle}/>
                    <textarea rows={8} placeholder="내용을 입력해주세요." value={content} onChange={changeContent} />
                </form>
                <div className = 'write-button-wrap'>
                    <button className="board-button" >확인</button>
                    <Link to="/board"><button className ="board-button">취소</button></Link>
                </div>
            </form>
        </BoardModalView>
             
    </div>

   
    )
}

export default BoardWrite