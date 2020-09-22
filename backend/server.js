import express from 'express'
import cors from 'cors'
import data from './data'

const app = express()
app.use(cors())
app.get('/api/wallets', (req, res) => {
  res.send(data.wallets)
})

app.listen(5000, () => {
  console.log('serve at http://localhost:5000')
})
