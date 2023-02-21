import React, {useState} from "react";
import '../App.css';

const UserCard = (props) => {
    return(
        <div style={{display: props.display}}className="usercard-div">
            {props.user.img != ''
                ? <img src={props.user.img} alt="invalid link" />
                : <img src="https://cdn3.iconfinder.com/data/icons/people-avatar/30/incognito-256.png" alt="инкогнито" />}
            <div className="p">
                <p style={{opacity: 0.5}}>Имя:</p>
                <p style={{textDecoration: 'blueviolet wavy underline'}}>{props.user.name}</p>
                <p style={{opacity: 0.5}}>Фамилия:</p>
                <p style={{textDecoration: 'blueviolet wavy underline'}}>{props.user.surname}</p>
            </div>
        </div>
    )
}

export default UserCard;