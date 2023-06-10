const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({success: true, message: "Selamat datang di backendnya febriyan"})
})

app.get('/products', (req, res) => {
    res.json({success: true, message: "products successfully fetched", data: [{name: "sepatu marmut", price: 55000}]})
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})