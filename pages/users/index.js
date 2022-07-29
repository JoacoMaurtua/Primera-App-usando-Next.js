import React from 'react';
import Title from '../components/title';
import Layout from '../components/layout';
import axios from 'axios';
import Link from 'next/link';

const users = ({ users }) => {
  return (
    <Layout>
      <Title>Users Page</Title>
      <div className="grid">
        {users.map((user) => {
          return (
            <Link href={`/users/[id]`} as={`/users/${user.id}`}>
              <a className="card">
                <h3>User</h3>
                <p>Name:{user.name}</p>
                <p>Name:{user.email}</p>
              </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default users;

//Metodo para lograr contenido estatico(prerenderizado)

export async function getStaticProps() {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  const users = data;
  return {
    props: {
      users,
    },
  };
}
