'use strict'

const TodoList = use("App/Model/TodoList")

class TodoListController {


  * create (request, response) {
    let userId = request.param('id')
    let data = request.only('name')
    data.user_id = userId

    let todoList = yield TodoList.create(data)
    response.status(201).json(todoList)
  }

  * showList (request, response) {
    let userId = request.param('id')
    let lists = yield TodoList.query().where('user_id', userId)

    response.json(lists)
  }

}


module.exports = TodoListController
