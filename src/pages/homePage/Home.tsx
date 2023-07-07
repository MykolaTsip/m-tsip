import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export const HomePage = () => (
    <Card>
        <Card.Title>
            <h1 className='ms-2 mt-4'>
                Welcome to greeting page
            </h1>
        </Card.Title>
        <Card.Body>
            <Card.Text>
                    My name is Mykola and i have 23 years old. I have more than 3 years of <br/>
                    commercial experience in Front-end and i continue to grow.
            </Card.Text>
            <Card.Text>
                    Actually i haven't come up with anything better, so I suggest you explore my mini application
            </Card.Text>
              <Link to="/todos">
                <Button variant="primary">Try todo page</Button>
              </Link>
        </Card.Body>
            
    </Card>
);
