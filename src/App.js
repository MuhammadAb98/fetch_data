
import { useEffect,useState } from 'react';
import './App.css';

function App() {

 // const [data,setData]=useState({});

useEffect(async()=>{

const response= await fetch("https://api.github.com/users/muhammadab98/repos")
const data=await response.json();
 console.log(data);
 
//    fetch('https://api.github.com/users/muhammadab98/repos')
//  .then((response) => response.json())
//  .then(json =>{
//    console.log(json);
//   setData(json);
//    })

 },[])

  return (
    <div>
     <h1>Hello </h1>
    </div>
  );
}




export default App;
