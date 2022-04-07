const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://azizulorvee:1234@cluster0.bdrxm.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'


const connectDB = (url) => {
    return mongoose
    .connect(connectionString)
}

module.exports = connectDB