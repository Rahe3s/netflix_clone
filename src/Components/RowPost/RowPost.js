import React, { useEffect, useState } from 'react'
import {API_KEY, imageUrl} from '../../Constants/Constants'
import Youtube from 'react-youtube'
import axios from '../../Axios'
import './RowPost.css'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,seturlId]= useState("")
  useEffect(() => {
    axios.get(props.Url).then((response)=>{
      
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Network Error')
    })
    
  
  }, [])
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      
      autoplay: 0,
    },
  };
  const movieClick=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videosapi_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        seturlId(response.data.results[0])
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
            <img onClick={()=>movieClick(obj.id)} className={props.isSmall ? "small-poster":"poster"} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )}

        </div>
     { urlId &&  <Youtube videoId={urlId.key} opts={opts}/>  }  
    </div>
  )
}

export default RowPost