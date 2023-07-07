
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ErrorPage = () => (
  <div>
    <Card bg="danger" text="white">
      <Card.Body>
        <Card.Title>Error page</Card.Title>
        <Card.Text> You try to visit page which don't exist! </Card.Text>
        <Link to="/"><Button >Go to home page</Button></Link>
      </Card.Body>
    </Card>
  </div>
)