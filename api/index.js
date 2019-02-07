const express = require('express')
const bodyParser = require('body-parser')
const config = require('https://wt-6f56eb896c300f1a8785ffd1215cc522-0.sandbox.auth0-extend.com/resume?type=resume')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.get('/', (req, res) => {
  res.send(config);
});
app.listen(config.port)
console.log('App is running on port ' + config.port);