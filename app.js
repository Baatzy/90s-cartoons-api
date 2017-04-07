const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const parser = require('body-parser')
const morgan = require('morgan')
const knex = require('./db/connection')

app.use(parser.json())
app.use(morgan('dev'))

app.get('/cartoons', getAllCartoons)

////////////////////////////////////////

function getAllCartoons (req, res) {
  knex('cartoons').select('*')
  .then(result => {
    res.json(result)
  })
  .catch(err => {
    console.error(err)
  })
}

app.listen(port, () => {
  console.log('Yayyyyyy!')
})
