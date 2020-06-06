import React from 'react'

import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';

const UsersList = ({ items }) => {
  if(items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2 className="no-users">No Users Found</h2>
        </Card>
      </div>
    )
  }
  
  return (
    <ul className="users-list">
      {items.map(user => <UserItem key={user.id} user={user} />)}
    </ul>
  )
}

export default UsersList
