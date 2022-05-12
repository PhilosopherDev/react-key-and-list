import React from 'react';

function Blog(props) {
    console.log('Blog');
    return (
    <div>
        { props.post.title}
    </div>
  );
}

export default Blog;
