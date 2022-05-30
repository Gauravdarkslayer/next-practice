import React from 'react'
import {useRouter} from 'next/router';

function Index() {
    let router = useRouter();

  return (
    <div>you clicked on {router.query.productId}</div>
  )
}

export default Index