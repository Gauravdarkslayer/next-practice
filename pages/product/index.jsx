import React from 'react'
import Link from 'next/link';

import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';
import { useState } from 'react';

const HomeButton = dynamic(() => import('../../components/homeButton'))



function Index({ users }) {
  const id = Math.floor(Math.random() * 1000);
  const router = useRouter();
  const [user, setUser] = useState([]);

  function handleButtonClick() {
    router.push(`/product/${id}`);
  }
  function getApiData() {
    console.log("callings");
    fetch("https://6293257a7aa3e6af1a05ffbb.mockapi.io/api/v1/users")
      .then((res) => {
        return res.json();
      }).then((res) => {
        setUser(res);
      }).catch((err) => {
        console.error(err);
      })
  }
  return (
    <>
      <HomeButton />

      <div>product index</div>
      <Link href={`/product/${id}`} >
        <a>
          visit some product
        </a>
      </Link>
      <button onClick={getApiData}> Navigate to random router </button>

      <ul>
        {users.map((val, index) => {
          return (
            <li key={index}>{val.name}</li>
          )
        })}

      </ul>

    </>
  )
}

export default Index


export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return {
    props: {
      users: await response.json()
    }
  }
}