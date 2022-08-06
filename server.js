const express = require('express')
const app = express()
const port = 3000
cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/user', (req, res) => {
     
     console.log(res);
    res.send('Hello World!')

  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})