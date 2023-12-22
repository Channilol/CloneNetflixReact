import React from "react";
import './Search.css'
import FilmCard from "../FilmCard/FilmCard";

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            films: [],
        }
    }

    handleChangeInput = (e) => {
        this.setState({search: e.target.value})
    }

    handleGet = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`http://www.omdbapi.com/?apikey=4b055f93&s=${this.state.search}`)
            if(res.ok) {
                const dataFetch = await res.json()
                const data = dataFetch.Search
                this.setState({films: data})
            } else {
                throw new Error('Errore nel caricamento dei dati')
            }
        } catch(err) {
            console.log('ERRORE:', err)
        }
    }
    

    render() {
        const { search,films } = this.state
        
        return(
            <>
            <div className="searchPage">
                <div className="closeSearch">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="rgba(255,255,255,0.8)" className="bi bi-x-circle-fill" viewBox="0 0 16 16" onClick={this.props.onClick}>
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                    </svg>
                </div>
                <div className="searchTop">
                    <div className="searchInputs">
                        <form onSubmit={this.handleGet}>
                            <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="rgba(255,255,255,0.7)" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </button>
                            <input className="searchText" type="text" placeholder="Search..." value={this.state.search} onChange={this.handleChangeInput}/>
                        </form>
                    </div>
                </div>
                <div className="searchBot">
                    {this.state.films.map((film) => {
                        return (
                            <FilmCard key={film.imdbID} filmImg={film.Poster} cardId={film.imdbID} />
                        )
                    })}
                </div>
            </div>
            </>
        )
    }
}

export default Search;