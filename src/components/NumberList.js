import React, { useState, useEffect } from 'react';
import Blog from './Blog';

function NumberList() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
        { id: 2, title: 'Installation', content: 'You can install React from npm.' }
    ]);

    const onClick = () => {
        const newPost = { ...posts[posts.length - 1], id: posts[posts.length - 1].id + 1 };
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