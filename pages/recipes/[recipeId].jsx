import { useRouter } from 'next/router'
import React from 'react'

function RecipeDetail({recipe}) {
    const router = useRouter();
    if (router.isFallback) {
        return <h1>Loading....</h1>
    }
  return (
    <div>RecipeDetail

    id: {recipe.id}
    name: {recipe.name}
    calories: {recipe.calories}

    </div>
  )
}

export default RecipeDetail


export async function getStaticProps(context) {
    // For build time rendering
    let response = await (await fetch(`http://localhost:4000/recipes/${context.params.recipeId}`)).json();
    console.log({response})
    if(!response.id){
        return {
            notFound:true
        }
    }
    return {
        props: {
            recipe: response
        },
        revalidate:true
    }
}

export async function getStaticPaths() {
   
    // use fallback true when we have lots of data to be served from the server else use fallback false
    // otherwise builds will take a longer time to generate and load
    return {
        // paths,
        paths:[
            { params: { recipeId: '1' } }
        ],
        fallback: true
    }
}