import Banner from "./components/Banner";
import MovieRow from "./components/MovieRow";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import requests from "./requests";
function App() {
  return (
    <div className="app">
    <Nav/>
    <Banner/>
        <MovieRow title="NETFILM ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>

        <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending}
          isLargeRow
        />
        <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated}
          isLargeRow
        />
        <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies}
          isLargeRow
        />
        <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}
          isLargeRow
        />
        <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}
          isLargeRow
        />
        <MovieRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}
          isLargeRow
        />
        <MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentaries}
          isLargeRow
        />
        <Footer/>
    </div>
  );
}

export default App;
