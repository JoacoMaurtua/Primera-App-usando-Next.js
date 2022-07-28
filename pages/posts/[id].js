import { useRouter } from 'next/router';
import Navbar from '../components/navbar';

const post1 = () => {
  const router = useRouter();
  
  return (
    <div>
      <Navbar/>
      <h1>Post Details</h1>
      <p>Post Id: {router.query.id} </p>
    </div>
  )
}

export default post1;