const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 8000

app.use("/static", express.static('static'))
app.use(express.urlencoded())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  let data = {
    'title':'Arin GYM',
    'content':'Get membership at free credit $100'
  }
  res.status(200).render('main', data)
})
app.post('/', (req,res)=>{
  // console.log(req.body)
  let name = req.body.name
  let age = req.body.age
  let gender = req.body.gender
  let address = req.body.address

  let output = `Name:${name}\n Age:${age}\n Gender:${gender}\n Address:${address}\n`
  fs.writeFileSync('output.txt', output)
  const data = {
    'status':'True'
  }
  res.status(200).render('main', data)
})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})