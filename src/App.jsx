import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Podcast from './components/Podcast'
import Book from './components/Book'

import './App.css'
import HomePage from './pages/Home';
import HomeSharedLayout from './pages/layouts/HomeSharedLayout';
import AllBooksSharedLayout from './pages/layouts/AllBooksSharedLayout';
import BookPage from './pages/Book';
import AllBooks from './pages/AllBooks';
import AllPodcastsSharedLayout from './pages/layouts/AllPodcastsSharedLayout';
import AllPodcasts from './pages/AllPodcasts';
import PodcastPage from './pages/Podcast';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<HomeSharedLayout />}>
            <Route index element = { <HomePage />} /> 
            <Route path="/book" element={<Book />} />
            <Route path="/podcast" element={<Podcast />} />
            
            <Route path="/all-books" element={<AllBooksSharedLayout />} >
              <Route index element = {<AllBooks />} />
              <Route path=':id' element = {<BookPage />} />
            </Route>

            <Route path="/all-podcasts" element={<AllPodcastsSharedLayout />} >
              <Route index element = {<AllPodcasts />} />
              <Route path=':id' element = {<PodcastPage />} />
            </Route>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
