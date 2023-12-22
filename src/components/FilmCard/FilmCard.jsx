import React from "react";
import './FilmCard.css';
import FilmDetails from "../FilmDetails/FilmDetails";

class FilmCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isCardClick: false,
        }
    }

    handleCardClick = () => {
        if(this.state.isCardClick === false) {
            this.setState({isCardClick: true})
        }
    }

    handleCloseDetails = () => {
        if(this.state.isCardClick === true) {
            this.setState({isCardClick: false})
        }
    }

    render() {
        return (
            <>
            {this.state.isCardClick ? <FilmDetails onClose={this.handleCloseDetails} imgUrl={this.props.filmImg} cardId={this.props.cardId}/> : null}
            <div className="cardContainer">
                <img src={this.props.filmImg} onClick={this.handleCardClick}/>
            </div>
            </>
        )
    }
}

export default FilmCard;