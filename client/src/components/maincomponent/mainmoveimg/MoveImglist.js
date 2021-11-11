import React from 'react'
import MovelistCard from './MovelistCard'
import '../maincss/Movecss.css'
import MainNotFound from './MainNotFound'

function MoveImglist({moveImgs,moveCurrentImgs, handleMoveCardClick}) {

    return (

<div>
<div className="test-back">
<div></div>
<div className="test">
{
moveImgs.length > 0? moveImgs.map((moveimg, idx) => (<MovelistCard
handleMoveCardClick={handleMoveCardClick}
moveimg={moveimg} 
key={idx.id}/>)):<MainNotFound/>}
</div>
</div>
</div>
    )
}

export default MoveImglist