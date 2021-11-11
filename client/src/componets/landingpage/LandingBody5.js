import React, { useEffect } from 'react'
import './LandingBody5.css'
import person1 from '../../image/person1.png'
import person2 from '../../image/person2.png'
import person3 from '../../image/person3.png'
import person4 from '../../image/person4.png'
import person5 from '../../image/person5.png'
import AOS from "aos";
import "aos/dist/aos.css";

function LandingBody5() {
    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    });
    return (
        <div className = 'background5'>
            <div>
               <div className = 'person-img'>
                   <img src = {person1} alt = '' data-aos = 'fade' data-aos-delay="1500" />
                   <img src = {person2} alt = '' data-aos = 'fade' data-aos-delay="1500"  />
                   <img src = {person3} alt = '' className ='person-front' data-aos-delay="1500" />
                   <img src = {person4} alt = '' data-aos = 'fade' data-aos-delay="1500" />
                   <img src = {person5} alt = '' data-aos = 'fade' data-aos-delay="1500" />
               </div>
               <div>
                   <div className = 'you'>당신의 고민 ,</div>
                   <div className = 'together' data-aos = "fade" data-aos-delay="1500">같이 들어드릴게요</div>
               </div>
            </div>
        </div>
    )
}

export default LandingBody5
