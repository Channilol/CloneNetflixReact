import './App.css';
import MyHeader from './components/MyHeader/MyHeader';
import BackgroundFilm from './components/BackgroundFilm/BackgroundFilm';
import FilmCarousel from './components/FilmCarousel/FilmCarousel';

function App() {
  return (
    <div className='App'>
        <BackgroundFilm />
        <MyHeader />
        <FilmCarousel searchQuery='shark' crslTitle='Shark Films'/>
        <FilmCarousel searchQuery='nature' crslTitle='Nature Films'/>
        <FilmCarousel searchQuery='war' crslTitle='War Films'/>
        <FilmCarousel searchQuery='star' crslTitle='Star Films'/>
        <FilmCarousel searchQuery='space' crslTitle='Space Films'/>
    </div>
  );
}

export default App;
