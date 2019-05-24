const cors = require('cors');
const express = require('express')
const catRouter = require('./routes/cat-router')
const dogRouter = require('./routes/dog-router')

const app = express()



app.use(cors());

 
app.use('/api/cats', catRouter)

// app.get('/cats', (req,res) => {
//   res.send('cats endpoint')
// })

app.use('/api/dogs', dogRouter)


// app.get('/dogs', (req,res) => {
//   res.send('dogs endpoint')
// })







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