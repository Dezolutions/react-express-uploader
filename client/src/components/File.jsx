import React from 'react'

const File = ({filename,filePath}) => {
  return (
    <div>
      <p>{filename}</p>
      <img src={filePath} alt="" style={{width: '100%'}}/>
    </div>
  )
}

export default File
