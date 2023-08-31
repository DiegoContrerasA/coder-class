import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    /*
      Get
      Utiliza url params [1] https://jsonplaceholder.typicode.com/posts/1
    */
    fetch('https://rickandmortyapi.com/api/character')
    .then( response => {
      return response.json()
    })
    .then( posts => {
      setPosts(posts.results)
    })
  }, [])

  // useEffect(() => {
  //   /*
  //     Get
  //     Utiliza Query params -> Parametros son postId = 1
  //   */
  //   fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
  //   .then( response => {
  //     return response.json()
  //   })
  //   .then( posts => {
  //     setPosts(posts)
  //   })
  // }, [])

  // useEffect(() => {
  //   /*
  //     POST
  //     Utiliza Query params -> Parametros son postId = 1
  //   */
  //   fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: 'diego@......',
  //       password: 'diego12345'
  //     })
  //   })
  //   .then( response => {
  //     return response.json()
  //   })
  //   .then( post => {
  //    console.log({post})
  //   })
  // }, [])

  // useEffect(() => {
  //   /*
  //     PUT
  //     Utiliza URL params -> 1
  //   */
  //   fetch('https://jsonplaceholder.typicode.com/posts/1', {
  //     method: 'PUT',
  //     body: JSON.stringify({
  //       title: 'Nuevo titulo'
  //     }),
  //     headers: {
  //       'content-type': 'application/json',
  //       'Authorization': 'Bearer my-token',
  //       'cache-control': 'no-cache'
  //     }
  //   })
  //   .then( response => {
  //     // Promise => json()
  //     return response.json()
  //   })
  //   .then( post => {
  //     // Trabajan con la info
  //    console.log({post})
  //   })
  // }, [])

  // api/instagram/user/1 => cors

  // intagram.com

  // useEffect(() => {
  //   /*
  //     DELETE
  //     Utiliza URL params -> 1
  //   */
  //   fetch('https://jsonplaceholder.typicode.com/posts/1', {
  //     method: 'DELETE'
  //   })
  //   .then( response => {
  //     return response.json()
  //   })
  //   .then( post => {
  //    console.log({post})
  //   })
  // }, [])

  return (
    <div className="App">
      {posts.map(({name, id}) => (
       <section key={id}>
         <p >{name}</p>
       </section>
      ))}
    </div>
  );
}

export default App;
