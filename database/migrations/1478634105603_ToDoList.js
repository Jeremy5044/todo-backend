'use strict'

const Schema = use('Schema')

class TodolistTableSchema extends Schema {

  up () {
    this.create('Todolist', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.integer('user_id')
      
    })
  }

  down () {
    this.drop('Todolist')
  }

}

module.exports = TodolistTableSchema
