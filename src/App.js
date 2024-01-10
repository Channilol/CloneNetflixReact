import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import MyTvShows from './components/MyTvShows/MyTvShows';
import FilmPage from './components/FilmPage/FIlmPage';
import MyHeader from './components/MyHeader/MyHeader';
import MyFooter from './components/MyFooter/MyFooter';

const App = () => {
    return (
      <BrowserRouter>
        <div className='App'>
            <MyHeader />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/tvshows' element={<MyTvShows />} />
              <Route path='/tvshows/:id' element={<FilmPage />} />
            </Routes>
            <MyFooter />
        </div>
      </BrowserRouter>
    );
}

export default App;