import React from 'react'
import FilmList from './FilmList'

class FilmBox extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: [ { id: 1, name: "A Dog's Purpose" }, { id: 2, name: "Sleepless" }, { id: 3, name: "Mindhorn" }, { id: 4, name: "Unlocked" }, { id: 5, name: "The Journey" } ]
    }
  }

  render(){
    return (
      <div className='film'>
        <FilmList data={this.state.data}/>
      </div>
    )
  }

}

export default FilmBox