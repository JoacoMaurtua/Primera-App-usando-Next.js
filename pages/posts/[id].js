import { useRouter } from 'next/router';
import Navbar from '../components/navbar';
import Title from '../components/title';
import Layout from '../components/layout';


const post1 = () => {
  const router = useRouter();
  
  return (
    <Layout>
      <Title>Post Details</Title>
      <p>Post Id: {router.query.id} </p>
    </Layout>
  )
}

export default post1;