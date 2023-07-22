import React from 'react'

interface ErrorState {
    data: string
}

const Error: React.FC<ErrorState> = ({ data }) => {
    return (
        <div>{data}</div>
    )
}

export default Error