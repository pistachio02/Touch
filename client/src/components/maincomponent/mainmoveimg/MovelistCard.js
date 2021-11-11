import React from 'react'
import '../maincss/Movecss.css'

function MovelistCard({moveimg,handleMoveCardClick}) {

    const {image} = moveimg
    return (
        <div key={moveimg.id}>
            <div className="project">
          <video className="project__img" 
          src={image} alt={moveimg.title} />
            <div className="project__description">
                <h3 className="imgtext">{moveimg.title}</h3>
                <span className="imgtext">{moveimg.content}</span>
                <div className="audio" >
                <audio controls src={moveimg.sound} type="audio/mpeg" ></audio>
                <div>
                <button className="main__btn" 
                onClick ={()=>{handleMoveCardClick(moveimg)}} 
                >Touch</button>
                </div>
                </div>
            </div>
        </div>
        </div>  
    )
}

export default MovelistCard
