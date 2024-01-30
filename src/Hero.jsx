import React from "react"

export default function Hero(props){
    const id = React.useId()
    return(
        <hero>
        <div className="display-grid">
            <div className="top-text-div">
                <label htmlFor={id + "topText"}>Top text</label>
                <input 
                    className="top-text-input"
                    id={id + "topText"}
                    onChange={props.handleChange}
                    name="topText"
                    value={props.inputData.topText}
                    type="text"
                />
            </div>
            <div className="bottom-text-div">
                <label htmlFor={id + "bottomText"}>Bottom text</label>
                <input 
                    className="bottom-text-input"
                    id={id + "bottomText"}
                    onChange={props.handleChange}
                    name="bottomText"
                    value={props.inputData.bottomText}
                    type="text"
                />
            </div> 
            <button className="new-image-button" 
                    onClick={props.handleClick}
            >Get a new meme image  🖼
            </button>
        </div>
         <div className="meme-img-div">
         <img src={props.memeImage} 
              className="meme-img"
              alt="meme"
         />
         <p className="image-text top">{props.inputData.topText}</p>
         <p className="image-text bottom">{props.inputData.bottomText}</p>
     </div>
     </hero>
    )
}