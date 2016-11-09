'use strict'

const Schema = use('Schema')

class TaskTableSchema extends Schema {

  up () {
    this.create('Task', (table) => {
      table.increments()
      table.timestamps()
      table.date('due-Date')
      table.integer('List_id')
      table.boolean('done_boolean')
      

    })
  }

  down () {
    this.drop('Task')
  }

}

module.exports = TaskTableSchema
