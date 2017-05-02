import React from 'react'

class GetShowtimesButton extends React.Component {

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    console.log('button click')
  }

  render(){
    return (
      <div className='get-showtimes-button' onClick={this.handleClick}>
        <button>Get Showtimes</button>
      </div>
    )
  }

}

export default GetShowtimesButton
