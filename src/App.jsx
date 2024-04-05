import axios from "axios";
import "./App.css";
import NavBar from "./Components/NavBar";
import { useEffect, useState } from "react";
import MoviesList from "./Components/MoviesList";
import MovieDetails from "./Components/MovieDetails";
import { BrowserRouter , Route , Routes } from "react-router-dom";


function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount , setPageCount] = useState(0)

  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ar&page=1&sort_by=popularity.desc&api_key=fac98f76e7000d63025742be04984a46"
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages)
  };

  const getCurrentPage = async (numberPage) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?language=ar&page=${numberPage}&api_key=fac98f76e7000d63025742be04984a46`
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages)
  };


  useEffect(() => {
    getAllMovies();
  }, []);

  const search = async (word) => {
     if (word === "") {
       getAllMovies();
     } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?language=ar&query=${word}&api_key=fac98f76e7000d63025742be04984a46`
      );
      setMovies(res.data.results);
      setPageCount(res.data.total_pages)
      
     }
  };

  return (
    <>
      <NavBar search={search} />
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<MoviesList movies={movies} getCurrentPage={getCurrentPage} pageCount={pageCount}/>}/>
        <Route path="/movie/:id" element={ <MovieDetails/>}/>
        
       </Routes>
     </BrowserRouter>
      
      
    </>
  );
}

export default App;
