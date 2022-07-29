import React, {useState, useEffect} from 'react'
import Title from '../components/title';
import Layout from '../components/layout';
import axios from 'axios';
import Link from 'next/link';

const posts = ({posts}) => {

  //***ESTE METODO ES client Side Generation(CSG)***
  /* const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () =>{
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(data);
    }
    fetchPosts();
  },[]);

  console.log('posts:',posts); */
  
  return (
    <Layout>
      <Title>Post Page</Title>
      <div>
        {posts.map((post) => {
          return(
            <Link href={`/posts/[id]`} as={`/posts/${post.id}`} key={post.id}>
              <a>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </a>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
};

export default posts;

//***ESTE ES EL METODO PARA HACER  Server Side Generation(SSG)***

export async function getServerSideProps(){ //Esta funcion corre del lado del servidor, no del cliente(browser)
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const posts = data;
  return {
    props:{
      posts
    }
  }
}

