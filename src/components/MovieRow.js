import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from '../axios'

const imageBaseUrl = "https://image.tmdb.org/t/p/original"


const MovieRow = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
    async function fetchData() {
        try {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            setLoading(false)
        }catch(err) {
            console.error(err)
        }
    }
    fetchData()  
    }, [fetchUrl])

    return (
        <Container>
        <MovieTag>{title}</MovieTag>
        {loading ? (
            <LoadingText>Please wait...</LoadingText>
        ):
          <MoviesContainer>
            {movies.map(movie => (
                <MovieImg src={`${imageBaseUrl}${isLargeRow ? movie.backdrop_path : movie.poster_path}`} 
                alt={movie.name} 
                key={movie.id} 
                isLargeRow={isLargeRow}
                /> 
            ))}
        </MoviesContainer>
        }
          
        </Container>
    )
}

export default MovieRow

const Container = styled.div`
width: 100%;
padding-left: 20px
`
const LoadingText= styled.p`
    color: #fff;
    text-align: center;
    margin-top: 20px;
    opacity: 0.7
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
