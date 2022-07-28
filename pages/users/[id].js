import { useRouter } from 'next/router';
import Navbar from '../components/navbar';
import Title from '../components/title';
import Layout from '../components/layout';

const user1 = () => {
  const router = useRouter();

  return (
    <Layout>
      <Title>User Details</Title>
      <p>User Id: {router.query.id} </p>
    </Layout>
  )
}

export default user1
