import React, {useEffect, useState} from 'react';
import { observer } from 'mobx-react-lite';

import { Card } from 'react-bootstrap';

import apiStore from '../../store/apiStore';
import { IComment } from '../../models';

export const Comments: React.FC = observer(() => {
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        if(!comments.length) {
            apiStore.setComments()
            .finally(() => setComments(apiStore.getComments));
        }
    });

    return(<>
         {
            comments.map((comment: any) => (
                <Card key={comment.id} className='mt-4 mb-4 p-2'>
                    <Card.Title> {comment.id}: {comment.name} </Card.Title>
                    <Card.Body>
                        <p>
                            Content: {comment.body}
                        </p>
                    </Card.Body>
                    <Card.Footer>
                        <p>
                            Data got from jsonplaceholder
                        </p>
                        <strong>
                            {comment.email}
                        </strong>
                    </Card.Footer>
                </Card>
            ))
        }
    </>)
});