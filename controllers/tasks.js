

const getAllTasks = (req, res) => {
    res.send('all items from controller')
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getTask = (req, res) => {
    res.json({id: req.params.id})
}

const updateTask = (req, res) => {
    res.json({id: req.params.id})
    
}

const deleteTask= (req, res) => {
    res.json({id: req.params.id})
}

module.exports = {
    getAllTasks,
    getTask,
    updateTask,
    deleteTask,
    createTask
}