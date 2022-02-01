const { Todo } = require("../config/connectDB");

const todo = {};

todo.newTodo = async (req, res, next) => {
    console.log(req.body.listData)
    const createdTodo = await Todo.create({body: req.body.listData})
    // const createdTodo = ''
    console.log('bokbokl')

    res.status(201).json({success: true, createdTodo})
}
todo.allTodo = async (req, res) => {
    const allTodo = await Todo.findAll({});

    res.status(201).json({success: true, allTodo})
}

module.exports = todo;