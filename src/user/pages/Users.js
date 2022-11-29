import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {id: 'u1', name: 'Max Schwarz', image: 'https://images.unsplash.com/photo-1593642532972-7d3a1b3a4d8c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWElMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', places: 3},
    {id: 'u2', name: 'Max Schwarz', image: 'https://images.unsplash.com/photo-1593642532972-7d3a1b3a4d8c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWElMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', places: 3}

  ]
  return (
    <UsersList items = {USERS}/>
  )
}

export default Users