import React from 'react'
import Link from 'next/link'

function Index({users}) {
  return (
    <>
    {users.map((user,key)=>{
        return <div key={key}>
            name: <div>{user.name}</div>
            username: <div>{user.username}</div>
            <Link href={`users/${user.id}`}>
                <a >
            See profile: 
                    
                    </a>            
            </Link>
        </div>
    })}
    </>
  )
}

export default Index





// export async function getStaticProps() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');
//     let data = await response.json();
//     return {
//         props:{
//             users:data
//         }
//     } 
// }


export async function getServerSideProps(){
    /**
     * 1.
        getServerSideProps runs only on the server side
        •The function will never run client-side
        •The code you write inside getServerSide Props won't even be included in the JS bundle that is sent to the
        browser
        2.
        •You can write server-side code directly in getServerSideProps
        •Accessing the file system using the fs module or queryingadatabase can be done inside
        getServerSideProps
        •You also don't have to worry about including API keys in getServerSide Props as that won't make it to the
        browser
        3.
        getServerSideProps is allowed only inapage and cannot be run fromaregular component file
        •It is used only for pre-rendering and not client-side data fetching
        4.
        ogetServerSideProps should return an object and object should containaprops key which is an object*
        5.
        OgetServerSideProps will run at request time
     */
    console.log("server side props claling");
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        return {
            props:{
                users:data
            }
        } 
}