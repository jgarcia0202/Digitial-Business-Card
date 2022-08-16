import React from "react";
import profilepic from "./profilepic.JPG"

const linkedin = 'https://www.citypng.com/public/uploads/preview/hd-blue-linkedin-in-icon-text-symbol-sign-png-316239730873y09pr6an2.png'

export default function Info() {
    return(
        <>
            <img src={profilepic} className="Info--image" />
            <div className="head--top">
                <h1>Jose Garcia</h1>
                <h2>Frontend Developer</h2>
                <h3>josegarcia.website</h3>
            </div>
            <div className="head--buttons">
                <button className="head--email"><span>✉</span> Email</button>
                <button className="head--linkedin"><img src={linkedin} height='12px' width='12px'/>LinkedIn</button>
            </div>
        </>
    )
}