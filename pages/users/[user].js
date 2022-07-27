import { useRouter } from 'next/router';

const user1 = () => {
  const router = useRouter();

  return (
    <div>
      <h1>User Details</h1>
      <p>User Id: {router.query.user} </p>
    </div>
  )
}

export default user1
