import React, {useEffect, useState} from 'react';
import { observer } from 'mobx-react-lite';

import { Card } from 'react-bootstrap';

import apiStore from '../../store/apiStore';
import { IUser } from '../../models';



export const Users: React.FC = observer(() => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        if(!users.length) {
            apiStore.setUsers()
            .finally(() => setUsers(apiStore.getUsers));
        }
    }, [users]);

    return(<>
        {
            users.map((user: IUser) => (
                <Card key={user.id} className='mt-4 mb-4 p-2'>
                    <Card.Title> {user.id}: {user.name} </Card.Title>
                    <Card.Body>
                        <p>
                            User name: {user.username}
                        </p>
                        <p>
                            Email: {user.email}
                        </p>
                    </Card.Body>
                    <Card.Footer>
                        Data got from jsonplaceholder
                    </Card.Footer>
                </Card>
            ))
        }
    </>)
});