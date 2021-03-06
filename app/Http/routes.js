'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/example', 'TodoListController.example')

Route.post('/users','UserController.create')
Route.get('users:id','UserController.show')

Route.post('/users/:id/todo-lists','TodoListController.create')
Route.get('/users/:id/todo-lists', 'TodoListController.showList')

Route.post('/users/:id/todo-lists/:listId/task','TaskController.create')
Route.delete('/users/:id/todo-lists/:listId/task/:taskId','TaskController.delete')
Route.put('/users/:id?todo-lists/:listId/task/:taskId','TaskController.update')
Route.get('/users/:id/todo-lists/:listId/task','TaskController.getAll')
