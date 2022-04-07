const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')

app.use(express.json())

app.get('/hello', (req, res) => {
    res.send('Task manager app')
})

app.use('/api/v1/tasks', tasks)


const PORT = 5000

const start = async () => {
    try {
        await connectDB()
        app.listen(PORT, console.log(`Server is listening on port ${PORT}`) )
    } catch (error) {
        console.log(error)
    }
}

start()