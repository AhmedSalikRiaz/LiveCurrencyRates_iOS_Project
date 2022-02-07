import React from 'react';
import Todo from './Todo';

export default function TodoList({ list, toggleTask }) {
  return (
      list.map(task => {
          return <Todo key={task.id} item={task} toggleTask={toggleTask} />;
      })
  );
}
