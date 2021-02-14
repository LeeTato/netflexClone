import React from "react";
import './App.css';
import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
import requests from "./requests";
import Row from './Row/Row';

function App() {

    return (
   <div className="App">
     <Nav/>
   <Banner/>
    <Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOriginals} islargeRow/>
    <Row title ="Trending Now" fetchUrl={requests.fetchTrending} />
    <Row title ="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
    <Row title ="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <Row title ="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    <Row title ="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    <Row title ="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    <Row title ="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} />
      </div>
     
    
    );
  }
export default App;
//5448df3cd97bf08f8d01289073ed819a