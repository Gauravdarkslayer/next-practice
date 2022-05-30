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
        </div>
    )
}

export default Docs