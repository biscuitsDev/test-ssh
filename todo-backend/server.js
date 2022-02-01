const app = require('./app');
require('dotenv').config({path: './config/config.env'})
const port = process.env.PORT || 5000;
require('./config/connectDB')

app.listen(port, ()=>{console.log("your Server is running at", port)});

