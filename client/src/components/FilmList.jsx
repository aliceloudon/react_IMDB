import React from 'react'
import Film from './Film'
import Showtime from './Showtime'

class FilmList extends React.Component {

  render(){
    
    const filmNodes = this.props.data.map( (film) => {
      return (
        <Film name={film.name} key={film.key}>
          {film.showtimes}
        </Film> 
      )
    })

    return(
      <div className='film-list'>
        {filmNodes}
      </div>
    )
  }

}

export default FilmList