import React from "react";
import "./style.css"

function Herocard(props) {
    return (
        <div className = "card">
            <div className = "img-container">
                <img alt = {props.name} src = {props.image}/>
            </div>
            <div className = "content">
                <ul>
                    <li>
                        <strong>Name: </strong> {props.name}
                    </li>
                </ul>
            </div>
        
        {/* {we need to make a moveHero function} */}
        {/* <span onClick ={() => props.moveHero()} ></span> */}
        </div>
    )
}

export default Herocard;