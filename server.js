import express from 'express'
import fileUpload from 'express-fileupload'
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

app.use(fileUpload())
app.use(cors())
const files = [];
app.get('/files', (req, res) => {
  res.json(files)
})

app.post('/upload',(req,res) => {
  const file = req.files.file
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => err ? console.log(err): null)
  res.json({filename: file.name,filePath: `uploads/${file.name}`})
  files.push({filename:file.name,filePath: `uploads/${file.name}`})
})

app.listen(process.env.PORT || 5000, () => console.log(`server is running...`))