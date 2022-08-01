//import React from 'react' --> ESTO YA NO ES NECESARIO
import Layout from './components/layout';
import Title from './components/title';
import Head from 'next/head';

const index = () => {
  return (
    <Layout>
      <Head>
        <title>Aprendiendo Next.js</title>
        <meta name="description" content="Este es un curso basico de next.js"/>
      </Head>
      <Title>Home page</Title>
      <p>Aprendamos Next.js</p>
      <style>
        {`
          p{
            color: darkgray;
            cursor: pointer;
          }
          p:hover{
            color: darkred;
          }
        `}
      </style>
    </Layout>
  )
}

export default index
