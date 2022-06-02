import React from 'react'

function AboutISR() {
  return (
    <div>
        <pre>
        Incremental Static Regeneration
        There wasaneed to update only those pages which neededachange without having to rebuild
        the entire app
        Incremental Static Regeneration(ISR)
        With ISR,Next.js allows you to update static pages after you have built your application
        You can statically generate individual pages without needing to rebuild the entire site,effectively
        solving the issue of dealing with stale data
        How?
        In the getStaticProps function,apart from the props key,we can specify a revalidate key
        The value for revalidate key is the number of seconds in which page regenration can occur
        </pre>
    </div>
  )
}

export default AboutISR