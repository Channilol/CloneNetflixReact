import './App.css';
import React from 'react';
import MyHeader from './components/MyHeader/MyHeader';
import BackgroundFilm from './components/BackgroundFilm/BackgroundFilm';
import FilmCarousel from './components/FilmCarousel/FilmCarousel';
import MyFooter from './components/MyFooter/MyFooter';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }

  render () {
    return (
      <div className='App'>
          <BackgroundFilm />
          <MyHeader />
          <FilmCarousel searchQuery='shark' crslTitle='Shark Films'/>
          <FilmCarousel searchQuery='nature' crslTitle='Nature Films'/>
          <FilmCarousel searchQuery='war' crslTitle='War Films'/>
          <FilmCarousel searchQuery='star' crslTitle='Star Films'/>
          <FilmCarousel searchQuery='space' crslTitle='Space Films'/>
          <MyFooter />
      </div>
    );
  }
}

export default App;