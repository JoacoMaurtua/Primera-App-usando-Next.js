import Title from '../components/title';
import Layout from '../components/layout';
import axios from 'axios';

const user1 = ({user}) => {
  
  return (
    <Layout>
      <Title>User Details</Title>
     
    </Layout>
  )
}

export default user1;

export async function getStaticProps({params}){
  const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = data;
  return{
    props:{
      user
    }
  }
}

//Siempre se requiere de getStaticPaths para paginas dinamicas con contenido estatico
