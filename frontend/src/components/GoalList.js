import React from 'react'
import Goal from './Goal';

const GoalList = ({ goals }) => {
  return (
    <ul className="goal-list">
      {goals.map(goal => (
        <li key={goal.id}>
          <Goal id={goal.id} text={goal.text} />
        </li>
      ))}
    </ul>
  )
}

export default GoalList
