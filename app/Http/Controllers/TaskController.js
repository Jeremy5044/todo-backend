'use strict'

const Task=use('App/Model/Task')

class TaskController {
	
	* create(request,response){
		let data = request.only('title','due-Date',"done_boolean")
		let listId = request.param('listId')
		data.List_id = listId

		let task = yield Task.create(data)
		response.json(task)
	}

	* delete(request,response){
		let taskid = request.param('taskId')

		let task = yield Task.find(taskid)
		task.delete() 
		response.json({
			DONE:'complete'})
   
	}

	* update(request,response){
		let taskid = request.param('taskId')
		let data = request.only('title','due-Date',"done_boolean")

		let task = yield Task.find(taskid)
		task.fill(data)
		response.json(data)
	}
 
 	* gitAll(request,response){
 		let taskid = request.param('taskId')
 	    let data = request.only('title','due-Date',"done_boolean")

 	    let task = yield Task.create(data)
 	    response.json(task)


 	} 

}

module.exports = TaskController
