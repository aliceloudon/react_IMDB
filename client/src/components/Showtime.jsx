import React from 'react'

const Showtime = (props) => {

    return (
      <div className='showtimes'>
        <h4 className='showtime'>
          {props.name}
        </h4>
        <p>
          {props.children}
        </p>
      </div>
    )

}

export default Showtime

