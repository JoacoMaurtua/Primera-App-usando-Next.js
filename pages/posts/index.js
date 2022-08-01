import React, {useState, useEffect} from 'react'
import Title from '../components/title';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

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
      <Head>
        <title>Landing page de posts</title>
        <meta name="description" content="Este es un curso basico de next.js"/>
      </Head>
      <Title>Post Page</Title>
      <div className = 'grid'>
        {posts.map((post) => {
          return(
            <Link href={`/posts/[id]`} as={`/posts/${post.id}`} key={post.id}>
              <a className='card'>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </a>
            </Link>
          )
        })}
      </div>
      <style jsx>
        {`
          .grid{
            display: flex;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 2rem;
          }

          .card{
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            color: black;
            text-decoration: none;
            border: 2px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15 ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}
      </style>
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

