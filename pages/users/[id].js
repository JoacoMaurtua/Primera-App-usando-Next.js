import { useRouter } from 'next/router';
import Navbar from '../components/navbar';

const user1 = () => {
  const router = useRouter();

  return (
    <div>
      <Navbar/>
      <h1>User Details</h1>
      <p>User Id: {router.query.id} </p>
    </div>
  )
}

export default user1
