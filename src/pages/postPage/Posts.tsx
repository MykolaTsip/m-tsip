import React, {useEffect, useState} from 'react';
import { observer } from 'mobx-react-lite';

import { Card } from 'react-bootstrap';

import apiStore from '../../store/apiStore';
import { IPost } from '../../models';

export const Posts: React.FC = observer(() => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        if(!posts.length) {
            apiStore.setPosts()
            .finally(() => setPosts(apiStore.getPosts));
        }
    }, [posts]);

    return(<>
         {
            posts.map((post: any) => (
                <Card key={post.id} className='mt-4 mb-4 p-2'>
                    <Card.Title> {post.id}: {post.title} </Card.Title>
                    <Card.Body>
                        <p>
                            Content: {post.body}
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