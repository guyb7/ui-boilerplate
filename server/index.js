const express = require('express')

const app = express()

app.get ('/', function (req, res) {
  res.sendFile('/client/homepage.html', { 'root': __dirname + '/../' })
})
app.get (/\/app.js/, function (req, res) {
  res.sendFile('dist/app.js', { 'root': __dirname + '/../' })
})
app.get (/\/app\/?.*/, function (req, res) {
  res.sendFile('dist/index.html', { 'root': __dirname + '/../' })
})

app.listen(3020, () => {
  console.log('UI Boilerplate is listenting')
})
