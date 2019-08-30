const todos = [
    {todo: 'Order a scooter', done: true},
    {todo: 'Go get my foot fixed', done: false},
    {todo: 'Finish this project', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function update(id, todo) {
    todos.splice(id, 1, todo);
  }
  
  function deleteOne(id) {
    todos.splice(id, 1);
  }
  
  function create(todo) {
    todos.push(todo);
  }
  
  function getOne(id) {
    return todos[id];
  }
  
  function getAll() {
    return todos;
  }