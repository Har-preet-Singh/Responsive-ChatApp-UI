import React from "react";
import './Conversation.css'

const Conversation = (props) => {

    return(
        
       <div className="conversation">
            <div className="header">
                <img className="header__img" src={props.image} alt="user"/>
                <div className="header__content">
                    <span className="header__name">{props.name}</span>
                    <span className="header__info">Click here for contact info</span>
                </div>
                
                <div className="navbar__options">
                    <i class="fa-solid fa-video"></i>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <i class="fas fa-ellipsis-v"></i>
                </div>
            </div>
           <div className="chat">
                {props.chat.map((convo) => (
                    Object.entries(convo).map(([key,value])=>(
                        <div className="chat__outer">
                        <div className="chat__inner">
                        <span className="chat__message">{value.message}</span>
                        <span className="chat__timeStamp">{value.timeStamp}</span>
                        </div>
                        </div>
                    ))
                )
                )}
            
            </div>

            <div className="footer">
            
                <div className="footer__outer">
                <button className="footer__outer__btn">+</button>
                <button className="footer__outer__btn"><i class="fa-solid fa-microphone"></i></button>
                </div>
                <div className="footer__input">
                <span id="input">{`Message ${props.name}`}</span>
                <button id="footer__submit__icon">&#10147;</button>
                </div>
            </div>
        </div>
    )
}
export default Conversation;