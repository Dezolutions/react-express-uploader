import React from 'react'
import File from './File'
const FileList = ({files}) => {
  return (
     <ul>
      {files
        ?
        files.map((item,i) => ( 
         <File key={item.filename + i} {...item}/>
        ))
        :
        <p>файлов пока нет</p>
      }
    </ul> 
  )
}

export default FileList
