'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments()
      table.timestamps()
      table.string('name').varchar()
      table.string('email').unique()
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UsersTableSchema
