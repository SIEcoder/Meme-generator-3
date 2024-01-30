import React from "react"

export default function Header(){
    return(
        <div className="Header">
            <div className="Header-logo">
                <img className="Header-img" src="./troll-face.png" alt="troll face"/>
                <div className="Header-logo-txt">Meme Generator</div>
            </div>
            <div className="Header-project-txt">React Course - Project 3</div>
        </div>
    )
}