import React from 'react'
import {useRouter} from 'next/router';

function ReviewId() {
    let router = useRouter();

  return (
    <div>reviewId {router.query.reviewId}</div>
  )
}

export default ReviewId