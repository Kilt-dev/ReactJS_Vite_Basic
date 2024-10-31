import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [post, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  
  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((Response) => Response.json())
    .then((data) => {
      setPosts(data)
      setLoading(false)
    })
    .catch((error)=> {
      console.error("Error",error)
      setLoading(false)

    })

},[])

  return (
    <>
    <h2>
      Danh sách bài post
    </h2>

    {loading ? (
    <p>
      Loading
    </p>)  : (
      <ul>
      {
        post.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))
      }
    </ul>
    )}
    
    </>
  )
}

export default App
