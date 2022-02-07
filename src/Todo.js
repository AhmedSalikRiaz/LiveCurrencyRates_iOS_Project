import React from 'react';

export default function Todo({ item, toggleTask }) {

  function handleTaskClick() {
    toggleTask(item.id)
  }

  return (
  <div>
      
      <label>
          <input type="checkbox" checked={item.complete} onChange={handleTaskClick} />
          {item.name}
      </label>

  </div>
  );
}
