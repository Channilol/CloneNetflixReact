import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import './FilmPage.css'

const FilmPage = () => {
    const params = useParams()

    const [film, setFilm] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://www.omdbapi.com/?apikey=4b055f93&i=${params.id}`)
                if (res.ok) {
                    const data = await res.json()
                    setFilm(data)
                } else {
                    throw new Error('Errore nel caricamento dei dati')
                }
            } catch(err) {
                console.log('ERRORE:', err)
            }
        }
    fetchData();
    }, [])

    return (
        <div className="filmPageDetails">
            <div className="filmDetLeft">
            <h1>{film.Title}</h1>
            <img src={film.Poster}></img>
            <p>Release date: {film.Released}</p>
            <p>{film.Runtime} || {film.Genre}</p>
            <p>Actors: {film.Actors}</p>
            <p>{film.Plot}</p>
            <Link to='/tvshows'>Torna indietro</Link>
            </div>
            <div className="filmDetRight">

            </div>
        </div>
    )
}

export default FilmPage