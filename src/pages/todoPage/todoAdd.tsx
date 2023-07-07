import React from 'react';
import { observer } from 'mobx-react-lite';

import { Form, Button } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import todoStore from '../../store/todoStore';
import './TodoAdd.css';

const TodoAdd: React.FC = observer(() => {

  const initialValues = {
    title: '',
    text: '',
    author: ''
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required').min(4),
    text: Yup.string().required('Text is required').min(4)
  });

  const handleSubmit = (values: any, { resetForm }: any) => {
    todoStore.addTodo(values)

    resetForm();
  };

  return (
    <div>
      <h1>Todo List</h1>

      <div className='form-control'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="title" className="mt-2 mb-2">
                <Form.Label>Title</Form.Label>
                <Field
                  as={Form.Control}
                  type="text"
                  name="title"
                  placeholder="Enter title"
                />
                <ErrorMessage name="title" component={Form.Text} className="text-danger" />
              </Form.Group>

              <Form.Group controlId="text" className="mt-4 mb-2">
                <Field
                  as="textarea"
                  name="text"
                  placeholder="Enter text"
                  style={{ width: '100%' }}
                />
                <ErrorMessage name="text" component={Form.Text} className="text-danger" />
              </Form.Group>

              <Form.Group controlId="author" className="mt-2 mb-2">
                <Form.Label>Author</Form.Label>
                <Field
                  as={Form.Control}
                  type="text"
                  name="author"
                  placeholder="Enter author (optional)"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-2">Add Todo</Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
});

export default TodoAdd;
