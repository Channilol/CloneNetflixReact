import React from "react";
import './FilmCategory.css'

class FilmCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render () {
        return (
            <div className={this.state.isCategoryOff === true ? "filmCategories" : 'filmCategories'}>
                <ul>
                    <li><h3>HOME</h3></li>
                    <li><a href="#">La mia lista</a></li>
                    <li><a href="#">Disponibili per il download</a></li>
                    <li><a href="#">Acclamati dalla critica</a></li>
                    <li><a href="#">Anime</a></li>
                    <li><a href="#">Azione</a></li>
                    <li><a href="#">Bambini e famiglie</a></li>
                    <li><a href="#">Campioni d'incassi</a></li>
                    <li><a href="#">Commedie</a></li>
                    <li><a href="#">Documentari</a></li>
                    <li><a href="#">Drammi</a></li>
                    <li><a href="#">Europei</a></li>
                    <li><a href="#">Fantascienza</a></li>
                    <li><a href="#">Fantasy</a></li>
                    <li><a href="#">Horror</a></li>
                    <li><a href="#">Internazionali</a></li>
                    <li><a href="#">Italiani</a></li>
                    <li><a href="#">Musica e musical</a></li>
                    <li><a href="#">Natale</a></li>
                    <li><a href="#">Reality</a></li>
                    <li><a href="#">Romantici</a></li>
                    <li><a href="#">Stand-up</a></li>
                    <li><a href="#">Thriller</a></li>
                    <li><a href="#">Audiodescrizione in Italiano</a></li>
                </ul>
                <button onClick={this.props.onClose}>x</button>
            </div>
        )
    }
}

export default FilmCategory;