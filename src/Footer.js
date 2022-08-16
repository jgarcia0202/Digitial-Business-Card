import React from "react";

const twit = "https://www.iconpacks.net/icons/1/free-twitter-icon-99-thumb.png"
const face = 'https://cdn-icons-png.flaticon.com/512/1419/1419513.png'
const insta = 'https://cdn-icons-png.flaticon.com/512/87/87390.png'
const git = 'https://cdn-icons-png.flaticon.com/512/25/25231.png'

export default function Footer(){
    return(
        <div className="footer">
            <img src={twit} width='50px'/>
            <img src={face} width='50px'/>
            <img src={insta} width='50px'/>
            <img src={git} width='50px'/>
        </div>
    )
}