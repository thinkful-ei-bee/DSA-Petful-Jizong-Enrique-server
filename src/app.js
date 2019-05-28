require('dotenv').config()
const cors = require('cors');
const express = require('express')
const {CLIENT_ORIGIN} = require('./config');
const catRouter = require('./routes/cat-router')
const dogRouter = require('./routes/dog-router')
const pplRouter= require('./routes/ppl-router')

const app = express()



app.use(cors({
  origin: CLIENT_ORIGIN
}))


 
app.use('/api/cats', catRouter)


app.use('/api/dogs', dogRouter)


app.use('/api/people', pplRouter)





// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});


  module.exports = app