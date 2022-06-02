import React from 'react'
import Image from 'next/image'

function Pets() {
    return (
        <div>
            Pets
            {
                [1, 2, 3, 4, 5, 6].map((val, index) => {
                    return (<div key={index}>
                        <Image placeholder='blur' blurDataURL='https://cdn.pixabay.com/photo/2015/06/24/02/12/the-blurred-819388_1280.jpg' src={`/${val}.jpg`} alt="" width="280" height="420" />

                    </div>)
                })
            }
        </div>
    )
}

export default Pets