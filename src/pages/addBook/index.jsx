import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContextLibrary } from '../../context/useLibrary'

const AddBook = () => {

    const { books, setBook } = useContext(GlobalContextLibrary)

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [cover, setCover] = useState('')
    const [intro, setIntro] = useState('')
    const [completed, setCompleted] = useState(false)
    const [resume, setResume] = useState('')

    const handleAddBook = (e) => {
        e.preventDefault();

        const nwBook = {
            idBook: crypto.randomUUID(),
            title: title,
            author: author,
            cover: cover,
            intro: intro,
            completed: completed,
            resume: resume
        }
        setBook(prev => [...prev, nwBook])
        console.log('------arbol de libros-------')
        return nwBook
    }

    const handleChangeInput = (e) => {
        const targetChange = (e.target.name);

        switch (targetChange) {
            case 'inputTitle':
                setTitle(e.target.value);
                break;

            case 'inputAuthor':
                setAuthor(e.target.value);
                break;

            case 'inputCover':
                const file = e.target.files[0];
                const fileToRead = new FileReader();


                fileToRead.readAsDataURL(file);

                fileToRead.onloadend = function () {
                    setCover(fileToRead.result.toString())
                    console.Console.info(fileToRead.result.toString())
                }

                break;

            case 'inputIntro':
                setIntro(e.target.value);
                break;

            case 'inputCompleted':
                setCompleted(e.target.value);
                break;

            case 'inputResume':
                setResume(e.target.value);
                break;

            default:
                break;
        }
    }


    return <>
        <div className='headerDiv'>
            <Link to={'/'}>Home</Link>
        </div>

        <form className='formAdd' onSubmit={handleAddBook}>
            <span className='captionForm'>Title:</span><br />
            <input onChange={handleChangeInput} type="text" className='inputText inputTitle' name='inputTitle' placeholder='nombre' value={title} />

            <br />
            <span className='captionForm'>Author:</span><br />
            <input onChange={handleChangeInput} type="text" className='inputText inputAuthor' name='inputAuthor' placeholder='William S' />
            <br />
            <span className='captionForm'>cover:</span><br />
            <input onChange={handleChangeInput} type="file" className='inputCover' name='inputCover' placeholder='Search' />
            {cover && <>
                <br /><img src={cover} width='200px' alt='cover'></img>
            </>
            }
            <br />
            <span className='captionForm'>Intro:</span><br />
            <input onChange={handleChangeInput} type="text" className='inputText inputIntro' name='inputIntro' placeholder='Intro' />
            <br />
            <span className='captionForm'>Completed:</span><br />
            <input onChange={handleChangeInput} type="checkbox" className='inputCompleted' name='inputCompleted' />
            <br />
            <span className='captionForm'>Resume:</span><br />
            <input onChange={handleChangeInput} type="text" className='inputText inputResume' name='inputResume' placeholder='Resume' />
            <br />
            <input onChange={handleChangeInput} type="submit" className='inputButton inputAddButton' name='inputAddButton' value='Add book' />
        </form>
        <br></br>
        <div>
            {JSON.stringify(books)}
            {JSON.stringify(books.bookc)}
        </div>
    </>
}

export default AddBook