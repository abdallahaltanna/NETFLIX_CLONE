import Row from './Row';
import requests from './requests';
import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Switch>
        <Route path='/' exact>
          <Banner />
          <Row
            title='NETFLIX ORIGINALS'
            fetchURL={requests.fetchNetflixOriginals}
            isRowLarge={true}
          />
          <Row title='Trending Now' fetchURL={requests.fetchTrending} />
          <Row title='Top Rated' fetchURL={requests.fetchTopRated} />
          <Row title='Action Movies' fetchURL={requests.fetchActionMovies} />
          <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
          <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />
          <Row title='Romance Movies' fetchURL={requests.fetchRomanceMovies} />
          <Row title='Documentaries' fetchURL={requests.fetchDecumentaries} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
