import React from 'react'
import Message from './Message'
import Progress from './Progress'
import axios from 'axios'
import FileList from './FileList'

const FileUpload = () => {
  const [file, setFile] = React.useState('')
  const [filename, setFilename] = React.useState('Choose file')
  const [percent, setPercent] = React.useState(0)
  const [files, setFiles] = React.useState([])

  const onChangeFileItem = e => {
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)
  }
  const fetchData = async () => {
    try {
      const {data} = await axios('/files')
      setFiles(data)
      
    } catch (e) {
      console.log(e)
    }
  }
  const onSubmitForm = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file',file)

    try {
      await axios.post('http://localhost:5000/upload', formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setPercent(Math.round((progressEvent.loaded * 100) / progressEvent.total))
          // Clear percentage
          setTimeout(() => {
            setPercent(0)
            setFile('')
            setFilename('')
          }, 3000);
        }
      })
      fetchData()
    } catch (e) {
      console.log(e)
    }
  }
  console.log(files)

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">{filename}</label>
          <input className="form-control" type="file" id="formFile" onChange={onChangeFileItem} />
          <div className="d-grid gap-2">
            <input type="submit" value="submit" className="btn btn-primary mt-4"/>
          </div>
        </div>
        
        <Progress percent={percent}/>
      </form>
      <Message/>
      <FileList files={files} />
      
    </>
  )
}

export default FileUpload
