import Link from 'next/link';

function Index({recipes}) {

  return (
    <ul>
        {recipes.map((val, index) => {
          return (
              <Link key={index} href={`recipes/${val.id}`}>
                  <a >

                  <li>{val.name}</li>
                  </a>
              </Link>
          )
        })}

      </ul>
  )
}

export default Index





export async function getStaticProps() {
  // This getStaticProps function will only run on the server side 
  // Accessing the file system using the fs module or querying a database can be done inside this function
  // This code will not be the part of bundle which is to be sent to the client.
  // This function only allowed to be in any file in the pages folder.
  // Returns object of props of object which contains data 

  // Revalidate use to call api again after n seconds during serving   
  const response = await fetch('http://localhost:4000/recipes');
  return {
    props: {
      recipes: await response.json()
    },
    revalidate:30
  }
}




