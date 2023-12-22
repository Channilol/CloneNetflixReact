import React from "react"
import './FilmCarousel.css'
import FilmCard from "../FilmCard/FilmCard"
 
class FilmCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            isError: false,
            data: [],
            carosRight: false,
        }
    }
    
    async componentDidMount() {
        try {
            const res = await fetch(`http://www.omdbapi.com/?apikey=4b055f93&s=${this.props.searchQuery}`)
            if (res.ok) {
                const dataFetch = await res.json()
                const data = dataFetch.Search
                this.setState({data: data})
                this.setState({isLoading: false})
                console.log(this.state.data)
            } else {
                throw new Error('Errore nel caricamento dei dati')
            }
        } catch(err) {
            console.log('ERRORE:', err)
        }
    }

    handleCarouselRight = () => {
        const data = this.state.data
        const firstFilm = data.shift()
        data.push(firstFilm)
        this.setState({data})
    }

    handleCarouselLeft = () => {
        const data = this.state.data
        const lastFilm = data.pop()
        data.unshift(lastFilm)
        this.setState({data})
    }

    render() { 

        return (
            <>
            <h2>{this.props.crslTitle}</h2>
            <div className="carouselContainer">
                <div className="cardsCarousel">
                    {this.state.data.map((film) => {
                        return (
                        <FilmCard key={film.imdbID} filmImg={film.Poster} />
                        )
                    })}
                </div>
                <button className="btnLeft" onClick={this.handleCarouselLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                    </svg>
                </button>
                <button className="btnRight" onClick={this.handleCarouselRight}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                </button>
            </div>
            </>
        )
    }
}

export default FilmCarousel;