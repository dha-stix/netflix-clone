import axios from '../axios'
import requests from "../requests"
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Banner = () => {
    const [movie, setMovie] = useState([])

    const truncate = (str, n)=> (
        str?.length > n ? str.substr(0,n-1) + "..." :str
    )
    useEffect(()=> {
        async function fetchMovie() {
            const request = await axios.get(requests.fetchNetflixOriginals)
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]
        )
        return request
        }
        fetchMovie()
    }, [])

    return (
        <BannerContainer bgImage={movie?.backdrop_path}>
            <BannerContents>
                <BannerTitle>
                    {movie?.title || movie?.name || movie?.original_name}
                </BannerTitle>

                <ButtonGroup>
                    <PlayButton>Play</PlayButton>
                    <ListButton>My List</ListButton>
                </ButtonGroup>
                    
                <BannerDescription>
                {truncate(movie?.overview, 150)}
                </BannerDescription>
            </BannerContents>
            <FadeShadow/>
        </BannerContainer>
    )
}

export default Banner

const BannerContainer = styled.header`
width: 100%;
background-image: url(${props => "https://image.tmdb.org/t/p/original"+props.bgImage});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
object-fit: contain;
color: #fff;
height: 448px;
margin-bottom: 30px;
display: flex;
flex-direction: column;
justify-content: space-between;
postion: relative;
`
const BannerContents = styled.div`
margin-top: 140px;
margin-left: 30px;
height: 190px;
max-width: 45rem
`
const ButtonGroup = styled.div`
padding-bottom: 15px;
`

const BannerTitle = styled.h1`
   font-size: 3rem;
   font-weight: 800;
   padding-bottom: 0.3rem
`
const PlayButton = styled.button`
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding: 0.5rem 2rem 0.5rem 2rem;
    margin-right: 1rem;
    background-color: rgba(51,51,51,0.7);
    &:hover {
        color: #000;
        background-color: #e6e6e6;
        transition: all 0.5s;
    }
`
const ListButton = styled(PlayButton)``
const BannerDescription = styled.p`
    line-height: 1.3;
    opacity: 0.9
`
const FadeShadow = styled.div`
    height: 7.4rem;
    postion: absolute;
`