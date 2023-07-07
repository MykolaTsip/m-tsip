import React, {useEffect} from 'react';
import { observer } from 'mobx-react-lite';

import { Button, Card } from 'react-bootstrap';

import { TodoEditForm } from './TodoEditFrom'; 

import todoStore from '../../store/todoStore';
import { INewTodo } from '../../models';

const TodoList: React.FC = observer(() => {

  const handleEdit = (id: number, editedTodo: INewTodo) => {
    todoStore.editTodo(id, editedTodo);
  };

  const handleRemove = (id: number) => {
    todoStore.removeTodo(id);
  };

  useEffect(() => {
    return () => todoStore.setAllClose()
  }, [todoStore.todos]);

  return (
    <>
      {todoStore.todos.map((todo) => (
        <Card key={todo.id} className='mt-2 mb-2'>
          <Card.Body>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text>Content: {todo.text}</Card.Text>
            <Card.Text>{todo.author && `Author: ${todo.author}`}</Card.Text>


            {todo.isEdit && <TodoEditForm id={todo.id} handleEdit={handleEdit} />}

            <Button variant="danger" onClick={() => handleRemove(todo.id)} className='me-2'>Remove</Button>
            <Button variant="primary" onClick={() => todoStore.setEditState(todo)}>{todo.isEdit ? 'Cancel edit' : 'Edit'}</Button>

          </Card.Body>
        </Card>
      ))}
    </>
  );
});

export default TodoList;
