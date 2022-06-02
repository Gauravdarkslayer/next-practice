import React from 'react'
import { useRouter } from 'next/router'
function Docs() {
    const router = useRouter()
    const { params = [] } = router.query;
    return (
        <div>docs
            This is the example of catch all routes
            if you type in browser /docs/feature1
            we will get here
            BUt if we only type /docs then there will be 404 error
            now to catch that one too
            <li>we can make a index.js file</li>
            <li>we can enclose our file into another square brackets</li>

            <p>
                {JSON.stringify(params)}
            </p>
            

            <pre>
            Link Pre-fetching contd.
            Whenapage with getStaticProps is pre-rendered at build time,in addition to the page HTML file,
            Next.js generatesaJSON file holding the result of running getStaticProps
            The JSON file will be used in client-side routing through next/link,or next/router
            When you navigate toapage that i    s pre-rendered using getStaticProps,Next.js fetches the JSON
            file(pre-computed at build time)and uses it as the props to create the page component client
            side
            </pre>



            <pre>
                <h2>
                    Types of rendering in next.js
                </h2>
                <ol>
                    <li> static site generation -- Pages will get genrated at build time only
                        There are three options for fallbacks
                        a. fallback = false, which means nextjs will throw a 404 page if the requested resource doesnt found.
                        b. fallback = true, which means if requested resource doesnt found then next js will call the getStaticProps for the data, while fetching the data we must make sure that we have an if condition i.e. if router.isFallBack, then show some loading bar etc.
                        c. fallback = `blocking`, same as fallback = true but it will block the user interaction while fetching the details.
                    </li>
                    <li> Incremental static regeneration -- Sometimes our app needs to fetch the latest data, in SSG this is not possible because the build gets generated on the runtime, only the non visited pages gets generated for the first time only, hence no real time, so to overcome this problem we can add revalidate key to getStaticProps return, it takes seconds as a value, and will keep revalidate the data in every n seconds when user requests that page.</li>
                    <li> Server side rendering -- everytime when user requests the webpage then the page generates a server side only and client gets the plain html using function getServerSideProps </li>
                </ol>
            </pre>
        </div>
    )
}

export default Docs