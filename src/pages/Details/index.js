import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'

import { Container } from './styles';
import {APIKey} from '../../config/key'

function Details() {

  const {id} = useParams()
  const [movie, setMovie] = useState([])

  const imagePath = 'https://image.tmdb.org/t/p/w500/'
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`).then(response => response.json()).then(data => {

      const {title, poster_path, release_date, overview } = data
      const movie = {
        id,
        title,
        image: `${imagePath}${poster_path}`,
        sinopse: overview,
        releaseDate: release_date
      }
      console.log(movie)
      setMovie(movie)
    })

  }, [id])
  //Dependencia do useEffect
  //cada vez que muda o Id do filme, fará uma nova requisição para a API

  return (
   <Container>
    <div className='movie'>
      <img src={movie.image} alt={movie.title}></img>
      <div className='movie__details'>
        <h2>{movie.title}</h2>
        <span className='sinopse'> Overview: {movie.sinopse}</span>
        <span className='lancamento'>Release Date: {movie.releaseDate}</span>    
        <Link to="/"><button>Come back</button></Link>    
      </div>
    </div>
   </Container>
  )
}

export default Details;