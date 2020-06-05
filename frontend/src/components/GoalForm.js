import React, { useState } from 'react'

const GoalForm = ({ onAddGoal }) => {
  const [text, setText] = useState('');

  const handleChange = event => {
    setText(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    onAddGoal({ id: Math.random().toString(), text: text })
    setText('');
  }

  return (
    <div className="goal-form">
      <form onSubmit={handleSubmit}>
        <label>Goal:</label>
        <input type='text' name='text' value={text} onChange={handleChange} />
        <br/>
        <input type="submit" value="Add Goal" />
      </form>
    </div>
  )
}

export default GoalForm
