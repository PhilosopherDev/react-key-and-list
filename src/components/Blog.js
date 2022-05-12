import React from 'react';

function Blog(props) {
    console.log('Blog', props.post.id);
    return (
    <div>
        { props.post.title}
    </div>
  );
}

export default Blog;
