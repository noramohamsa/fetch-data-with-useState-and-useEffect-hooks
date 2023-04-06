// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
function App() {
  const [loading,setLoading]=useState('true')
  const[error,setError]=useState('')
  const[post,setPost]=useState({})


  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response)=>{
      setLoading(false)
      setError('')
      setPost(response.data)
    })
    .catch((error)=>{
      setLoading(false)
      setError('there is an error ')
      setPost({})
    })
  },[])
  return (
    <div className="App">
     {loading? "Loading.....please wait...":post.title}
     {error&& error}
    </div>
  );
}

export default App;
