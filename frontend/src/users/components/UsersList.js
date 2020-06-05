import React from 'react'
import UserItem from './UserItem';

const UsersList = ({ items }) => {
  if(items.length === 0) {
    return (
      <div className="center"><h2>No Users Found.</h2></div>
    )
  }
  
  return (
    <ul className="users-list">
      {items.map(user => <UserItem key={user.id} user={user} />)}
    </ul>
  )
}

export default UsersList
