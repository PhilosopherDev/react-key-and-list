import React from 'react';
import NumberList from './components/NumberList'
import Blog from './components/Blog';

function App() {
  const numbers = [1, 2, 3, 4, 5];

  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  
  return (
    <div>
      <NumberList numbers={numbers} />
    </div>
  );
}

export default App;
