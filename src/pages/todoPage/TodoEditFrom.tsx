import { Form, Button } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { INewTodo } from '../../models';

interface ITodoEdit {
    handleEdit: (id: number, values: INewTodo) => void,
    id: number
}

export const TodoEditForm = ({handleEdit, id}: ITodoEdit) => {
    const initialValues = {
        newTitle: '',
        newText: '',
      };
    
    const validationSchema = Yup.object().shape({
        newTitle: Yup.string().required('Title is required').min(4),
        newText: Yup.string().required('Text is required').min(4)
    });


return (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, {resetForm }) => {
      handleEdit(id, values);
      resetForm ();
    }}
  >
    {({ handleSubmit }) => (
      <Form onSubmit={handleSubmit}>
        <Field
          as={Form.Control}
          type="title"
          name="newTitle"
          placeholder="Enter new title"
          className="mt-2 mb-2"
        />
        <ErrorMessage name="newTitle" component={Form.Text} className="text-danger" />

        <Field
          as={Form.Control}
          type="text"
          name="newText"
          placeholder="Enter new text"
          className="mt-2 mb-2"
        />
        <ErrorMessage name="newText" component={Form.Text} className="text-danger" />

        <br/>
        <Button variant="primary" type="submit" className="mb-4 mt-2">Edit</Button>
      </Form>
    )}
  </Formik>)
} 