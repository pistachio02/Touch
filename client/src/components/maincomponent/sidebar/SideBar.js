import React from 'react'
import '../maincss/sidebar.css'

import { Link } from 'react-router-dom'

// import Profile from '../../../public/img/profile_1.png'


function MainSideBar() {
    return (
        

    
    <>
    <div className="side_menu_background">

    <div className="side_menu">
        {/* <Link to = "/heal" className= "side_menu_text">About</Link> */}
        <Link to = "/heal" className= "side_menu_text">ImgList</Link>
         <Link to = "/heal/touch" className= "side_menu_text">Touch</Link>

    </div>
    
    </div>
    </>
  );
};


export default MainSideBar

