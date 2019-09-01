var Todo = require('../models/todo');

module.exports = {
    index,
    show,
    new: newTarea,
    create,
    delete: deleteTarea,
    edit,
    update
};

function index (req, res) {
  res.render('todos/index', {
    todos: Todo.getAll(),
    tiempo: req.time
  });
};

function show (req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    todoNum: parseInt(req.params.id) + 1
  });
};

function newTarea(req, res) {
  res.render('todos/new');
};

function create (req, res) {
  console.log(req.body);
  req.body.done = false;
  Todo.create(req.body);
  res.redirect('/todos');
};

function deleteTarea (req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect('/todos');
};

function edit (req, res) {
  var todo = Todo.getOne(req.params.id)
  res.render('todos/edit', {
    todo,
    todoIdx: req.params.id
  });
};

function update (req, res) {
  req.body.done = !!req.body.done; // arregla lo que manda el form html cunado no está chequeado el cheqbox
  //console.log(req.params.id, req.body);
  Todo.update(req.params.id, req.body);
  res.redirect('/todos'); //no me anda el interpolador ${} ver como unir el url
};
