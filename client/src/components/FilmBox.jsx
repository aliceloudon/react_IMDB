import React from 'react'
import FilmList from './FilmList'
import GetShowtimesButton from './GetShowtimesButton'

class FilmBox extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: [ { id: 1, name: "A Dog's Purpose", showtimes: "18:30, 21:00" }, { id: 2, name: "Sleepless", showtimes: "18:45, 21:30" }, { id: 3, name: "Mindhorn", showtimes: "17:00, 19:00" }, { id: 4, name: "Unlocked", showtimes: "20:30" }, { id: 5, name: "The Journey", showtimes: "20:30" } ]
    }
  }

  render(){
    return (
      <div className='filmBox'>
        <h2>UK Opening This Week</h2>
        <FilmList data={this.state.data}/>
        <GetShowtimesButton/>
      </div>
    )
  }

}

export default FilmBox