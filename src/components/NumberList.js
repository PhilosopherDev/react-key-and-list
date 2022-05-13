import React, { useState } from 'react';
import Blog from './Blog';

function NumberList() {
    const random = () => Math.floor((Math.random() + 1) * 100);
    const [posts, setPosts] = useState([        
        { id: random(), title: random(), content: 'Welcome to learning React!' },
        { id: random(), title: random(), content: 'You can install React from npm.' }
    ]);

    const onClick = () => {
        const newPost = { id: random(), title: random(), content: 'hi' };
        setPosts(posts.concat(newPost));
    }

    return (
        <ul>
            <button onClick={onClick}>+1</button>
            {posts.map((post) => <Blog key={ post.id} post={ post }></Blog>) }
        </ul>
    );
}

export default NumberList;