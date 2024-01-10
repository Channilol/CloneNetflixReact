import FilmCarousel from '../FilmCarousel/FilmCarousel';
import BackgroundFilm from '../BackgroundFilm/BackgroundFilm';

const Home = () => {
    return (
        <>
            <BackgroundFilm />
            <FilmCarousel searchQuery='shark' crslTitle='Shark Films'/>
            <FilmCarousel searchQuery='nature' crslTitle='Nature Films'/>
            <FilmCarousel searchQuery='war' crslTitle='War Films'/>
            <FilmCarousel searchQuery='star' crslTitle='Star Films'/>
            <FilmCarousel searchQuery='space' crslTitle='Space Films'/>
        </>
    )
}

export default Home