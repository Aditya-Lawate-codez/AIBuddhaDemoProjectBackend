const express=require('express')
const connectDB = require('./server/models/db')
const taskRoutes = require('./server/routes/taskRoutes')
const app = express()

connectDB();
app.use(express.json())
app.use('/api', taskRoutes)


app.listen('3000',()=>{
    console.log(`Server running on port 3000`)
});