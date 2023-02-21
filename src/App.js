import { useState } from 'react';
import './App.css'
import LogIn from './Components/LogIn';
import UserCard from './Components/UserCard';

function App() {

  const [newUser, setNewUser] = useState({})
  const [newDisplay, setNewDisplay] = useState('none')

  const createUser = (newUser) => {
    const user1 = {
      ...newUser
    }
    setNewUser({...user1})
  }

  const setDisplayFlex = () => {
    setNewDisplay('flex')
  }

  return (
    <> 
        <LogIn create={createUser} newDisplay={setDisplayFlex}/>
        <UserCard user={newUser} display={newDisplay}/>
    </>
  );
}

export default App;
