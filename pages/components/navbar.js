import Link from 'next/link';

const navbar = () => {
  return (
    <nav>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/users'>
        <a>Users</a>
      </Link>
      <Link href='/posts'>
        <a>Posts</a>
      </Link>
      {/* Ejemplo de rutas dinamicas */}
      <Link href='/posts/[id]' as={`/posts/${5}`}>
        <a>Posts #5</a>
      </Link>
      <style jsx>
        {`
          nav{
            padding-top: 10px;
            margin: 2rem 0;
          }

          a{
            padding: 0 10px;
          }
        `}
      </style>
    </nav>
  )
};

//nota: Link tiene varios props interesantes

export default navbar