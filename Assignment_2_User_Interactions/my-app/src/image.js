import React from 'react';
import img1 from './images/childhooddadandme.jpg';
import img2 from './images/dad.jpg';
import img3 from './images/mom.jpg';

function Images(){

    return(
        <div>
            <img src={img1} alt=""/>
            <img src={img2} alt=""/>
            <img src={img3} alt=""/>
        </div>

    )
}

export default Images;