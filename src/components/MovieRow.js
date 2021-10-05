import React, {useState, useEffect} from 'react'
import YouTube from 'react-youtube'
import movieTrailer from "movie-trailer"
import styled from 'styled-components'
import axios from '../axios'
const imageBaseUrl = "https://image.tmdb.org/t/p/original"


const MovieRow = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    const opts = {
        height: "300",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }
    const handleClick= (movie) => {
       if(trailerUrl) {
           setTrailerUrl("")
       } else {
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL (url).search)
                setTrailerUrl(urlParams.get("v"))
            }).catch((error) => console.error(error))
       }
    }

    useEffect(()=>{
    async function fetchData() {
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results)
    }
    fetchData()  
    }, [fetchUrl])

    return (
        <Container>
          <MovieTag>{title}</MovieTag>
          <MoviesContainer>
            {movies.map(movie => (
                <MovieImg src={`${imageBaseUrl}${isLargeRow ? movie.backdrop_path : movie.poster_path}`} alt={movie.name} 
                key={movie.id} 
                isLargeRow={isLargeRow}
                onClick={handleClick(movie)}
                /> 
            ))}
        </MoviesContainer>
       { trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </Container>
    )
}

export default MovieRow

const Container = styled.div`
width: 100%;
padding-left: 20px
`
const MoviesContainer = styled(Container)`
display: flex;
overflow-y: hidden;
overflow-x: scroll;
padding: 20px;
-ms-overflow-style: none;
scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    
`
const MovieImg = styled.img`
    object-fit: contain;
    max-height: ${props => props.isLargeRow ? "150px" : "250px"};
    transition: transform 450ms;
    margin-right: 10px;
    &:hover {
        transform:${props => props.isLargeRow ? "scale(1.06)" : "scale(1.09)"};
        opacity: 1
    }
`
const MovieTag = styled.h3`
color: white;
font-weight: 500;
opacity: 0.8
`
