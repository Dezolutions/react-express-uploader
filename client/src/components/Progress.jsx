import React from 'react'

const Progress = ({percent}) => {
  return (
    <div className='progress'>
      <div
        className='progress-bar progress-bar-striped bg-success'
        role='progressbar'
        style={{width: `${percent}%`}}
      >
      {percent}%
      </div>
    </div>
  )
}

export default Progress
