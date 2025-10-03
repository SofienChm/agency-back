const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from backend!')
})

let counter = 0
// Example endpoint to get app view count or other data
app.get('/api/viewCount', (req, res) => {
  counter++
  res.json({ count: counter })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
