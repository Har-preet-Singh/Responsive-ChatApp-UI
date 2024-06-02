import { useState } from 'react';
import React from "react"; 
import './Contacts.css'

const Contacts = (props) => {

    const [menu,setMenu] = useState(false);

    const [unread, setUnread] = useState(!!props.count);

    const [deleteContact,setDeleteContact] = useState("");

    const handleMenu = (e) => {
        if(e.target.className==="container__icon"){
            setMenu(true);
        }
        else{
            setMenu(false)
        }
    }

    const handleUnread = (e) => {
        if(e.target.className==='menu__option' ){
            setUnread(true);
            setMenu(false)
        }
        else if(e.target.className!=="container__icon"){
            setUnread(false)
        }
    }

    const handleDeleteContact = () => {
        if(deleteContact===""){
            setDeleteContact("none");
            setMenu(false)
        }
    }

    return(
        <>
        <section className="container" id={props.name} onClick={handleUnread} style={{
            display: deleteContact
        }}>
            <img className="container__img" src={props.image} alt="user"></img>
            <div className="container__content">
            <span className="container__name">{props.name}</span>
            <span className="container__lastMessage">{props.lastMessage}</span>
            </div>
            <div className="container__unreadCount__div">{unread && props.count>0 && <span className="container__unreadCount__span">{props.count}</span>}</div>
            <span onClick={handleMenu}className="container__icon">&#x22EE;</span>
        </section>

            {menu && <div className="menu">
                <span  className='menu__option' onClick={handleUnread}>Mark as Unread</span>
                <span className='menu__option' onClick={handleDeleteContact}>Delete</span>
                <span className="menu__option" onClick={handleMenu}>Cancel</span>
            </div>}

        </>
    )
}

export default Contacts;