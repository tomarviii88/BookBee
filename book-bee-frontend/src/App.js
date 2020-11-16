import React, { useEffect, useState } from 'react';
import Navbar from './components/layouts/Navbar';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ExplorePage from './pages/ExplorePage';
import BookClubPage from './pages/BookClubPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import axios from 'axios';
import BookBeeMainPage from './pages/BookBeeMainPage';

const App = () => {
  const [token, setToken] = useState('');
  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          btoa(
            '85acc1ba7c3a4349b1abca61d53e2b26' +
              ':' +
              'ae1de5a2ad0c4ab4983f3d0a3b22ae68'
          )
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    }).then(tokenResponse => {
      setToken(tokenResponse.data.access_token);
      axios(
        `https://api.spotify.com/v1/playlists/${'37i9dQZF1DX9uKNf5jGX6m'}/tracks?limit=10`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + tokenResponse.data.access_token
          }
        }
      ).then(tracksResponse => {
        // setTracks({
        //   selectedTrack: tracks.selectedTrack,
        //   listOfTracksFromAPI: tracksResponse.data.items
        // })
        console.log('track', tracksResponse.data.items);
      });
      axios(
        `https://api.spotify.com/v1/browse/categories/${'wellness'}/playlists?limit=10`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + tokenResponse.data.access_token
          }
        }
      ).then(playlistResponse => {
        // setPlaylist({
        //   selectedPlaylist: playlist.selectedPlaylist,
        //   listOfPlaylistFromAPI: playlistResponse.data.playlists.items
        // })
        console.log('playlist', playlistResponse.data.playlists.items);
      });

      axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + tokenResponse.data.access_token }
      }).then(genreResponse => {
        // setGenres({
        //   selectedGenre: genres.selectedGenre,
        //   listOfGenresFromAPI: genreResponse.data.categories.items
        // })
        console.log({
          //selectedGenre: genres.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.categories.items
        });
      });
      console.log(tokenResponse.data.access_token);
    });
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={BookBeeMainPage} />
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/explore' component={ExplorePage} />
            <Route exact path='/bookclub' component={BookClubPage} />
          </Switch>
        </div>
      </Switch>
    </Router>
  );
};

export default App;
