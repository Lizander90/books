import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GlobalContextLibrary } from '../../context/useLibrary';

const ViewBook = ({ idBook }) => {
    const { books, getBookId } = useContext(GlobalContextLibrary)
    const { idBookParam } = useParams('idBookParam');
    const bookView = getBookId(idBookParam)

    console.log(getBookId(idBookParam))

    return <>
        <div className='headerDiv'>
            <Link to={'/'}>Home</Link>
        </div>
        {
            bookView && <>

                <div><img src={bookView.bookCover} alt='Cover' width='350px'></img></div>
                <div><h1>{bookView.bookAuthor}</h1></div>
                <div><h3>{bookView.bookTitle}</h3></div>
                <div>{bookView.bookReview}</div>
            </>
        }
        {/* {bookView ?? <div>Libro no encontrado...</div>} */}
        {/* 
        {bookView &&
            <div>
                hay
            </div>

        } */}

    </>
}

export default ViewBook