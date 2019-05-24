const express = require('express');
const cors = require('cors');
const { PORT } = require('./config')


const app = express();
app.use(cors());

// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.get('/', (req, res) => {
  res.send('Hello, world!')
})



// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

<<<<<<< HEAD
app.listen(PORT,()=>{
=======


app.listen(8080,()=>{
>>>>>>> 261f6aa6dfca469875dc4295cf2308dc8b34c93d
  console.log('Serving on 8080');
});