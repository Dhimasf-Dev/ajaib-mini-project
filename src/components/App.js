import React, {useEffect, useState} from 'react'
import Home from './Home'
import Header from './Header'
import axios from 'axios'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [usersFilters, setUsersFilters] = useState([])

   useEffect(() => {
      getUsers()
   },[])

   const getUsers = () => {
      if (users == ""){
        axios.get(`https://randomuser.me/api/?results=50`)
        .then(res => {
          setUsers(res.data.results)
          setUsersFilters(res.data.results)
        })
        .catch(err => alert(err.response.data.message))
      } else {
        setUsersFilters(users)
      }
   }

  return (
    <div className="App">
      <Header users={users} setUsersFilters={setUsersFilters} getUsers={getUsers} />
      <Home usersFilters={usersFilters} setUsersFilters={setUsersFilters} />
    </div>
  );
}

export default App;
