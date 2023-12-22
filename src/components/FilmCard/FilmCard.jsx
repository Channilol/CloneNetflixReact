import React from "react";
import './FilmCard.css';

class FilmCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isCardHover: false
        }
    }

    render() {
        return (
            <>
            <div className="cardContainer">
                <img src={this.props.filmImg} />
                {this.state.isCardHover ? <div>ciao</div> : null}
            </div>
            </>
        )
    }
}

export default FilmCard;