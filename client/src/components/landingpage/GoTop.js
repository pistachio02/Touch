import React from 'react'
import * as AiIcons from 'react-icons/ai';
import './GoTop.css'


function GoTop() {
    return (
        <div onClick = {() => window.scrollTo(0, 0)} className = 'go'>
             <AiIcons.AiOutlineArrowUp/>
        </div>
       
    )
}

export default GoTop
