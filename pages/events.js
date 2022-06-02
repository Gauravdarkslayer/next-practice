import { useState } from "react";
import { useRouter } from 'next/router';


async function apiFetcher(params) {
    const response = await fetch(`http://localhost:4000/${params}`)
    const data = await response.json()
    return data
}

function Events({ newsList }) {
    const router = useRouter();
    async function fetchSports() {
        setEvents(await apiFetcher('news?category=sports'))
        router.push('/events?category=sports', undefined, { shallow: true })
    }
    const [events, setEvents] = useState(newsList);


    return (
        <div>
            <h2>NEWS</h2>
            <button onClick={fetchSports}>Fetch sports news</button>
            <br />
            <br />

            {events.map((val, index) => {
                return <div key={index}>
                    Title: {val.title} <br />
                    Description: {val.description} <br />
                    Category: {val.category}<br />
                    <hr />
                </div>
            })}
        </div>
    )
}


export default Events

export async function getServerSideProps(context) {
    const { query } = context;
    const { category } = query
    const queryString = category ? 'news?category=sports' : 'news'
    // This is will run first
    const data = await apiFetcher(queryString)
    console.log({ data })
    return {
        props: {
            newsList: data
        }
    }
}

