
import { useEffect } from 'react';
import './App.css';

function App() {
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json))
  },[])
  
  return (
    <div>
     <h1>Hello</h1>
    </div>
  );
}

export default App;
