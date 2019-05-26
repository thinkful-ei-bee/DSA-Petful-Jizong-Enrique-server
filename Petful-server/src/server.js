const { PORT } = require('./config')
const app = require('./app')
const cors = require('cors')

app.use(cors({origin: CLIENT_ORIGIN}))




app.listen(PORT,()=>{
  console.log(`Server listening at http://localhost:${PORT}`);
});