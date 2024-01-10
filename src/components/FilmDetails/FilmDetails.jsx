import React from "react";
import './FilmDetails.css';

class FilmDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            cardId: this.props.cardId,
            newComment: {
                rate: '',
                comment: '',
                elementId: this.props.cardId,
            }
        }
    }

    componentDidMount = async () => {
        try {
            const res = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZjZhZGUwZGQxZDAwMTgyZDE3MWMiLCJpYXQiOjE3MDQ3MjAwNDUsImV4cCI6MTcwNTkyOTY0NX0.DniBO2PlsIOn1pa4wAkZ_7XYJiCFgkID4BD2VGlZNgY"
                    }
                })
            if (res.ok) {
                const dataComments = await res.json()
                console.log(dataComments)
                const data = []
                dataComments.map((comment) => {
                    if(comment.elementId === this.state.cardId) {
                        data.push(comment)
                    }
                })
                console.log(data)
                this.setState({comments: data})
            }
        }
        catch (err) {
            alert('Errore nel caricamento dei dati')
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.rate === '' && this.state.newComment.comment === '') {
            alert('You must select a rating from 1 to 5 and write a comment to submit')
        }
        if(this.state.newComment.rate === '') {
            alert('You must select a rating from 1 to 5 to submit')
        }
        if(this.state.newComment.comment === '') {
            alert('You must write a comment to submit')
        }
        try {
            const res = fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                method: "POST",
                body: JSON.stringify(this.state.newComment),
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZjZhZGUwZGQxZDAwMTgyZDE3MWMiLCJpYXQiOjE3MDQ3MjAwNDUsImV4cCI6MTcwNTkyOTY0NX0.DniBO2PlsIOn1pa4wAkZ_7XYJiCFgkID4BD2VGlZNgY",
                    "Content-Type": "application/json",
                },
            });
            alert('Commento inviato!')
            this.setState({newComment: {
                rate: '',
                comment: '',
            }})
            this.props.onClose();
        }
        catch (err) {
            alert('Errore nel caricamento dei dati')
        }

    }

    handleStar = (e) => {
        this.setState({newComment: {
            ...this.state.newComment,
            rate: e.target.value
        }})
    }

    handleInput = (e) => {
        this.setState({newComment : {
            ...this.state.newComment,
            comment: e.target.value
        }})
    }

    render() {
        const { comments, cardId, newComment } = this.state

        return (
            <>
            <div className="filmDetails">
                <div className="detailsTop">
                    <div className="filmPoster">
                        <img src={this.props.imgUrl} alt='filmPoster'/>
                    </div>
                    <div className="filmComments">
                        <div className="closeDetails">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="rgba(255,255,255,0.8)" className="bi bi-x-circle-fill" viewBox="0 0 16 16" onClick={this.props.onClose}>
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                            </svg>
                        </div>
                        <ul>
                            <h2>Commenti:</h2>
                            {this.state.comments.map((comment) => {
                                return (
                                <li key={comment._id}>{comment.comment}<span className="commentRate">{comment.rate === 1 ? '⭐' : (comment.rate === 2 ? '⭐⭐' : (comment.rate === 3 ? '⭐⭐⭐' : (comment.rate === 4 ? '⭐⭐⭐⭐' : (comment.rate === 5 ? '⭐⭐⭐⭐⭐' : ''))))}</span></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="detailsBot">
                    <h2>Write a comment</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="radio" id='star1' name='star' value='1' onClick={this.handleStar}/>
                        <label htmlFor='star1'  className='star' >⭐</label>
                        <input type="radio" id='star2' name='star' value='2' onClick={this.handleStar}/>
                        <label htmlFor='star2' className='star' >⭐⭐</label>
                        <input type="radio" id='star3' name='star' value='3' onClick={this.handleStar}/>
                        <label htmlFor='star3' className='star' >⭐⭐⭐</label>
                        <input type="radio" id='star4' name='star' value='4' onClick={this.handleStar}/>
                        <label htmlFor='star4' className='star' >⭐⭐⭐⭐</label>
                        <input type="radio" id='star5' name='star' value='5' onClick={this.handleStar}/>
                        <label htmlFor='star5' className='star' >⭐⭐⭐⭐⭐</label>
                        <div>
                            <input type='text' id='inputComment' placeholder="Write a comment" required value={this.state.newComment.comment} onChange={this.handleInput}></input>
                        </div>
                        <button type="submit" id='submitBtn'>Submit</button>
                    </form>
                </div>
            </div>
            </>
        )
    }
}

export default FilmDetails;