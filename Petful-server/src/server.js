const { PORT } = require('./config')
const app = require('./app')



app.get('/', (req, res) => {
  res.send('Hello, world!')
})




app.listen(PORT,()=>{
  console.log(`Server listening at http://localhost:${PORT}`);
});