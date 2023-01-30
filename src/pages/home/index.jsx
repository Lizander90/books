import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContextLibrary } from '../../context/useLibrary'

const HomeBook = () => {
    const { books } = useContext(GlobalContextLibrary);

    console.log('-------------')
    console.log(books)
    for (let index = 0; index < books.length; index++) {
        console.log(books[index].bookTitle)
    }

    return <>
        <div className='footerNav'>
            <Link to='add'> Add Book</Link>
            <div> Total de libos: {books.length}</div>
        </div>

        <div className='containerAllBooks'>

            {
                books.map((bookX) => {
                    return <div key={bookX.idBook}>
                        <div className='containerCardBook'>
                            <h2>
                                <Link to={`/view/${bookX.idBook}`} >
                                    {bookX.bookTitle}
                                </Link>
                            </h2>
                            <h5>
                                {bookX.bookAuthor}
                            </h5>
                        </div>

                    </div>
                })
            }
        </div>
    </>
}

export default HomeBook