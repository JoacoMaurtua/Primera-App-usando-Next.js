//import React from 'react' --> ESTO YA NO ES NECESARIO
import Layout from './components/layout';
import Title from './components/title';

const index = () => {
  return (
    <Layout>
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
