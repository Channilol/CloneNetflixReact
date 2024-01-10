import React from "react";
import './BackgroundFilm.css'

class BackgroundFilm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <>
            <div className='backgroundDiv'>
                <img className="filmLogo" src='https://upload.wikimedia.org/wikipedia/fr/thumb/0/02/Interstellar.svg/1280px-Interstellar.svg.png'/>
                <img className='filmBackground' src='https://media-assets.wired.it/photos/615c496119d79c7758d7a0be/master/pass/wired_placeholder_dummy.png'/>
                <div className="bgFilmBtns">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                        </svg>
                        Riproduci
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                        Altre Info
                    </button>
                </div>
            </div>
            </>
        )
    }
}

export default BackgroundFilm;