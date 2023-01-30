import React from 'react'
import { Link } from 'react-router-dom'

const HomeBook = () => {
    return <>
        <Link to='add'> Add Book</Link>
        <Link to='/view/11'> View</Link>
    </>
}

export default HomeBook