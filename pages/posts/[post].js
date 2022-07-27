import { useRouter } from 'next/router';

const post1 = () => {
  const router = useRouter();
  
  return (
    <div>
      <h1>Post Details</h1>
      <p>Post Id: {router.query.post} </p>
    </div>
  )
}

export default post1