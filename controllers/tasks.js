
const asyncWrapper = require('../middleware/async')

const getAllTasks = async (req, res) => {
 res.send('get all tasks')
}

const createTask = async (req, res) => {
  res.send('create Task')
}

const getTask = async (req, res, next) => {
  res.send('get Task')
}
const deleteTask = async (req, res, next) => {
  res.send('delete Task')
}
const updateTask = async (req, res, next) => {
  res.send('update Task')
  }

  


  module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
  }
  