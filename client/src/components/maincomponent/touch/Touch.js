import React,{useRef} from 'react'
import swal from 'sweetalert';
import {FullScreen,useFullScreenHandle} from "react-full-screen";
import TouchIsLogin from './TouchIsLogin'
import '../maincss/Touch.css'
import axios from 'axios'


function Touch({moveImgs,isLogin}) {

    const handle = useFullScreenHandle();
   

    const handleLikeCardClick = () => {
      const healing_id = moveImgs.id

      axios
          .post('https://localhost:4000/zzim', {healing_id}, {withCredentials: true})
          .then((res) => {
            if(res.data.message === "Zzim Successfully Added!"){
              swal({
                title:"찜 하셨습니다!!",
                text:"마이페이지에 저장되었습니다!",
                icon:"success",
                dangerMode: true,
              })
            } else if(res.data === "Already Added to Zzim!"){
              swal({
                title:"바보야",
                text:"이미 찜 되어 있습니다!",
                dangerMode: true,
              })
            }
          })
      };


      const audioRef = useRef(null);
      
        const handlePlay = () => {
          audioRef.current.play();
        };
      
        const handlePause = () => {
          audioRef.current.pause();
        };

        return !isLogin?<TouchIsLogin />
        :(
            <div>
              
              <div className="touch_background">
  
               <div className="touch_icon">
               <div onClick={handlePlay}>
              <i  className="far fa-play-circle"></i>
              </div>
              <div onClick={handlePause}>
              <i  className="far fa-stop-circle"></i>
              </div>
              <div onClick={handle.enter}>
              <i className="fas fa-expand-arrows-alt"></i>
              </div>
              
              <div onClick={handleLikeCardClick}>
              <i className="fas fa-heart"></i>
              </div>
               </div>
               <p className="touch_text">이미지와 함께 즐겁게 감상하세요 😀</p>
               
              <audio 
              autoPlay='autoPlay'
              ref={audioRef} src={moveImgs.sound} type="audio/mpeg" ></audio>
              </div>
                <FullScreen  
                hight={'100%'}
                width={'100%'}
                handle={handle}>
                <video 
                
                width='100%'
                height='100%'
                autoPlay="autoPlay" 
                loop="loop" 
                className='thumbnail' 
                src={moveImgs.image} 
                alt='thumbnail' />
                {/* <audio src={moveImgs.sound} type="audio/mpeg" ></audio> */}
                </FullScreen>
            </div>
         )
} 


export default Touch

