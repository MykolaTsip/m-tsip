import React from 'react';
import TodoAdd from './todoAdd';
import TodoList from './todoList';

const TodoPage: React.FC = () => {
  return (
    <div>
      <TodoAdd />
      <TodoList />
    </div>
  );
};

export default TodoPage;
