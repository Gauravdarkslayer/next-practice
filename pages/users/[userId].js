import React from 'react'
import { useRouter } from 'next/router'


function UserDetails({ user }) {
    const router = useRouter()
    if (router.isFallback) {
        return <h1>Loading....</h1>
    }
    return (
        <div>
            UserDetails
            ID: {user.id}
            username: {user.username}
            name: {user.name}
        </div>
    )
}

export default UserDetails

export async function getStaticPaths() {

    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    let paths = data.map((val) => {
        return {
            params: {
                userId: `${val.id}`
            }
        }
    });

    // use fallback true when we have lots of data to be served from the server else use fallback false
    // otherwise builds will take a longer time to generate and load
    // and still nextjs will create cached .html pre-rendered file in server folder of .next
    return {
        // paths,
        paths:[
            { params: { userId: '1' } }
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {
    // For build time rendering
    let response = await (await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.userId}`)).json();
    if(!response.id){
        return {
            notFound:true
        }
    }
    return {
        props: {
            user: response
        }
    }
}