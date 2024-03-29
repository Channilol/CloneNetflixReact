import './MyHeader.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MyDropdownMenu from "../MyDropdownMenu/MyDropdownMenu";
import FilmCategory from "../FilmCategory/FilmCategory";
import Search from "../Search/Search";

const MyHeader = ({}) => {
    const [isDropdown, setIsDropdown] = useState(false)
    const [isCategory, setIsCategory] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isSearch, setIsSearch] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    })

    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setIsScrolled(isScrolled)
    };

    const handleImageClick = () => {
        if(isDropdown === false) {
            setIsDropdown(true)
        } else {
            setIsDropdown(false)
        }
    }

    const handleCategoryClick = () => {
        if(isCategory === false) {
            setIsCategory(true)
        }
    }

    const handleCloseCategory = () => {
        setIsCategory(false)
    }

    const handleSearch = () => {
        setIsSearch(true)
    }

    const handleCloseSearch = () => {
        setIsSearch(false)
    }

    return(
        <>
        {isSearch ? <Search onClick={handleCloseSearch}/> : null}
        <header id="top" className={isScrolled ? 'scrolled' : null}>
            <div className="headerTop">
                <div className="headerLeft">
                    <img className='logoN' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/330px-Netflix_2015_N_logo.svg.png?20221130064001' alt='netflixLogo' />
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="138" viewBox="0 0 512 138"><path fill="#DB202C" d="M340.657 0v100.203c12.36.575 24.687 1.27 36.98 2.09v21.245a1822.444 1822.444 0 0 0-58.542-2.959V0zM512 .012l-28.077 65.094l28.07 72.438l-.031.013a1789.409 1789.409 0 0 0-24.576-3.323l-15.763-40.656l-15.913 36.882a1815.88 1815.88 0 0 0-22.662-2.36l27.371-63.43L435.352.013h23.325l14.035 36.184L488.318.012zM245.093 119.526V.011h60.19v21.436h-38.628v27.78h29.227v21.245h-29.227v49.05zM164.58 21.448V.01h66.69v21.437h-22.565v98.66c-7.197.19-14.386.412-21.56.683V21.448zM90.868 126.966V.014h59.89v21.435h-38.331v29.036c8.806-.113 21.327-.24 29.117-.222V71.51c-9.751-.12-20.758.134-29.117.217v32.164a1848.195 1848.195 0 0 1 38.331-2.62v21.247a1815.638 1815.638 0 0 0-59.89 4.45M48.571 77.854L48.57.01h21.562v128.96c-7.882.81-15.75 1.673-23.603 2.584L21.56 59.824v74.802a1834.87 1834.87 0 0 0-21.561 2.936V.012H20.49zm346.854 46.965V.012h21.563V126.6c-7.179-.64-14.364-1.23-21.563-1.78"/></svg>
                    <nav> 
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/tvshows'>Serie TV</Link></li>
                            <li><a href='#'>Film</a></li>
                            <li><a href='#'>Nuovi e popolari</a></li>
                            <li><a href='#'>La mia lista</a></li>
                            <li><a href='#'>Sfoglia per lingua</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="headerRight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-search" viewBox="0 0 16 16" onClick={handleSearch}>
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                    <p><a href='#'>Bambini</a></p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-bell" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                    </svg>
                    <img src='https://soranews24.com/wp-content/uploads/sites/3/2020/05/sp-2-1.png' alt='avatar' onClick={handleImageClick}/>
                </div>
            </div>
            <div className="headerBot">
                <nav>
                    <ul>
                        <li>Serie TV</li>
                        <li>Film</li>
                        <li onClick={handleCategoryClick}>Categorie ▼</li>
                    </ul>
                </nav>
            </div>
            {isDropdown ? <MyDropdownMenu opacity='visible'/> : <MyDropdownMenu opacity=''/>}
            {isCategory ? <FilmCategory onClose={handleCloseCategory}/> : null}
        </header>
        </>
    )
}

export default MyHeader;