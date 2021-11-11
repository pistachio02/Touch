import React,{useEffect, useState} from 'react'
import MoveImglist from './MoveImglist'
import Search from '../search/Search'
import Loading from '../../../pages/LoadingPage'
import * as AiIcons from 'react-icons/ai';
import '../maincss/Movecss.css'


function MoveImgList({moveImgs, handleMoveCardClick, moveCurrentImgs, search}) {

    const [ScrollY, setScrollY] = useState(0);
    
    const handleFollow = () => {
      setScrollY(window.pageYOffset);
      if(ScrollY > 100) {
      } 
    }
  
    const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setScrollY(0);  // ScrollY 의 값을 초기화
    }
  
    useEffect(() => {
      const watch = () => {
        window.addEventListener('scroll', handleFollow)
      }
      watch();
      return () => {
        window.removeEventListener('scroll', handleFollow)
      }
    })

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
          setLoading(false)
        },5000)
      },[])

    return loading?<Loading/>:(
        <div>
            <div className="top" onClick={handleTop}>
            <AiIcons.AiOutlineArrowUp/>
            </div>
            <Search search={search}/>
            <MoveImglist moveCurrentImgs={moveCurrentImgs} moveImgs={moveImgs} 
            handleMoveCardClick={handleMoveCardClick}/>
        </div>
    )
}

export default MoveImgList
