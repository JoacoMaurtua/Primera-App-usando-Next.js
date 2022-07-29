import Title from '../components/title';
import Layout from '../components/layout';
import axios from 'axios';
import { useRouter } from 'next/router';

const User = ({ user }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>CARGANDO...</div>;
  }

  return (
    <Layout>
      <Title>User ID {user.id}</Title>
      <div className="card">
        <h3>User</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
      <style jsx>
        {`
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}
      </style>
    </Layout>
  );
};

export default User;

//static paths para rutas dinamicas
export async function getStaticPaths() {

  //const paths = [{ params: { id: '1' } }, { params: { id: '2' } }]; --> Metodo estatico

  //mejor practica:
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  const users = data;

  const paths = users.map((user)=>{
    return{
      params:{id: `${user.id}`}
    }
  });

  return {
    paths, //determina cuales son los paths prerenderizados
    fallback: true, //si existe la posibilidad de que se agreguen mas usuarios, fallback debe ser true
  };
}

export async function getStaticProps({ params }) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = data;
  return {
    props: {
      user,
    },
  };
}

//Siempre se requiere de getStaticPaths para paginas dinamicas con contenido estatico
