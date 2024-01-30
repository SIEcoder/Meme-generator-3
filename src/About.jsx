import React from "react"

export default function Section(props){
    return(
        <about>
            <button 
                className="show-info-btn"
                onClick={props.toggle} >
                        {props.shownInfo ? "Hide creator info": "Show creator info"}
            </button>
            { props.shownInfo && 
                <div className="owner-info">
                    <div className="owner-info-header">About Creator</div>
                    <img src="./1705078656832.jpeg" className="owner-img" alt="creator"/>
                    <div className="about">Hello there! I'm Emmanuel. I'm a beginner front-end developer
                        and technical writer too. What you have here is a Meme Generator project I created 
                        using ReactJS.
                        I'd like us to connect. Sound good?
                        Let's connect via:
                        <br/>
                        <li>
                            <a href="https://www.linkedin.com/in/izuchukwu-emmanuel-642744297/"
                                target="_blank"
                            >Linkedin
                            </a>
                        </li>
                        <li>
                        <a href="https://twitter.com/Bigman_Sie" target="_blank">
                            X
                        </a>
                        </li>
                        <li>
                            Whatsapp: +234 8069979021
                        </li>
                    </div>
                </div>
            }
        </about>
    )
}