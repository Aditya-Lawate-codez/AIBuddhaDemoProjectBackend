require('dotenv').config()
// const MONGODB_URI = "mongodb+srv://adityalawate2004:qazxswedc@threads.riq9cuf.mongodb.net/?retryWrites=true&w=majority&appName=Threads"
const MONGODB_URI = process.env.URI;
module.exports ={
    MONGODB_URI
}