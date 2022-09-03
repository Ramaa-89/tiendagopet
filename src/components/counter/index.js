import React, { useState } from 'react';

const Counter = () => {
    const [stock, setStock] = useState(10)

    return (
        <>
        <div> {stock} </div>
        </>
    )

}