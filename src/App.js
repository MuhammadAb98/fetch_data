
import { useEffect,useState } from 'react';
import './App.css';

function App() {

  const [repos,setRepos]=useState([{}]);

useEffect(()=>{

async function getrepos(){
    
    const response= await fetch("https://api.github.com/users/muhammadab98/repos")
    const data=await response.json();
     console.log(data);
    setRepos(data)

  }

  getrepos();

//    fetch('https://api.github.com/users/muhammadab98/repos')
//  .then((response) => response.json())
//  .then(json =>{
//    console.log(json);
//   setData(json);
//    })

 },[])

  return (
    <div>
     
     <ol>
      {repos.map((repoObj,ind)=>{
          return(<li key={ind}>{repoObj.name}</li>)
        
        })}
     </ol>
    
    </div>
  );
}




export default App;
