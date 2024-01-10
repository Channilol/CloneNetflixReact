import './MyTvShows.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

//<button onClick={() => navigate('/tvshows/32187318')}>Film id squali</button>

const MyTvShows = () => {
    const navigate = useNavigate()

    const [tvShow, setTvShow] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://www.omdbapi.com/?apikey=4b055f93&s=shark')
                if (res.ok) {
                    const dataFetch = await res.json()
                    const data = dataFetch.Search
                    setTvShow(data)
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
        <div className='tvShowsFilms'>
            {tvShow.map((film) => {
                return (
                    <div className='tvShowsFilm' key={film.imdbID}>
                        <img src={film.Poster} onClick={() => navigate(`/tvshows/${film.imdbID}`)}></img>
                    </div>
                )
            })}
        </div>
    )
}

export default MyTvShows