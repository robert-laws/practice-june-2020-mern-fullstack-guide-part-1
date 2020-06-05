import React, { useState } from 'react';

import GoalList from './components/GoalList';
import GoalForm from './components/GoalForm';

import './App.scss';

function App() {
  const [goals, setGoals] = useState([
    { id: 1, text: "Finish Course" },
    { id: 2, text: "Learn about course main topic" },
    { id: 3, text: "Help students in Q & A section" }
  ]);

  const addNewGoal = newGoal => {
    setGoals(prevGoals => ([
      ...prevGoals,
      newGoal
    ]))
  }

  return (
    <div className="course-goals">
      <h2>
        Course Goals
      </h2>
      <GoalList goals={goals} />
      <hr/>
      <GoalForm onAddGoal={addNewGoal} />
    </div>
  );
}

export default App;
