import React from 'react'

const Film = (props) => {

    return (
      <div className='film'>
        <h4 className='filmName'>
          {props.name}
        </h4>
      </div>
    )

}

export default Film

