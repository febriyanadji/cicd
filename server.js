const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`Selamat datang di websitenya <b>febriyanadji</b>, versi saat ini adalah ${process.env.VERSION}`)
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})