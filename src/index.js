require('dotenv').config()

import express from 'express'
const app = express()
const port = process.env.PORT
const morgan = require('morgan');
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port} 🏅`)
})