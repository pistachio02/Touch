import React,{useState,useEffect} from 'react'

import {FullScreen,useFullScreenHandle} from "react-full-screen";

function FavoriteCard({likeCard,handleDelete}) {

  console.log('card',likeCard)
  const handle = useFullScreenHandle();

    const {image} = likeCard
    return (
      
        <div key={likeCard.id}>
        <div className="project">
        <FullScreen
        handle={handle}
        >
      <video className="project__img" 
      autoPlay="autoPlay" 
      loop="loop" 
      src={image} alt={likeCard.title} />
        </FullScreen>
        <div className="project__description">
            <h3 className="imgtext">{likeCard.title}</h3>
            <span className="imgtext">{likeCard.content}</span>
            <div className="audio" >
            <audio controls src={likeCard.sound} type="audio/mpeg" ></audio>
            <div>
            <button 
            className="main__btn"
            onClick={handle.enter}>크게보기</button>
           
            <button className="main__btn" 
            onClick={()=> handleDelete(likeCard.id)}
            >삭제하기</button>
            
            </div>
            </div>
        </div>
    </div>  
    </div>  
  
    )
}

export default FavoriteCard