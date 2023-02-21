import React, {useState} from "react";

const LogIn = (props) => {
    const [person, setPerson] = useState({name: '', surname: '', img: ''})

    const showUserCard = () => {
        props.create(person)
        props.newDisplay()
    }

    return(
        <div className="login-div">
            <h1>Log In</h1>
            <div className="login-conten">
                <input maxLength={15} value={person.name} onChange={event => setPerson({...person, name: event.target.value})} type="text" placeholder="Имя"/>
                <input maxLength={15} value={person.surname} onChange={event => setPerson({...person, surname: event.target.value})} type="text" placeholder="Фамия"/>
                <input value={person.img} onChange={event => setPerson({...person, img: event.target.value})}type="text" placeholder="URL фото"/>
            </div>
            <button onClick={showUserCard}>
                Ok</button>
        </div>
    )
}

export default LogIn;