import React from 'react'

import UsersList from '../components/UsersList';

import flowers from '../../images/flowers.jpg';

const Users = () => {
  const USERS = [
    { id: 1, name: "Bob Cobb", image: flowers, places: 4 }
  ]
  return (
    <UsersList items={USERS} />
  )
}

export default Users
