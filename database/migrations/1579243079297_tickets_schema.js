'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TicketsSchema extends Schema {
  up () {
    this.create('tickets', (table) => {
      table.increments()
      table.string('issue_number', 254).notNullable().unique()
      table.string('customer_name', 254).notNullable()
      table.string('customer_id', 254).notNullable()
      table.integer('category_id').nullable().unsigned().references('id').inTable('categories').onDelete('cascade')
      table.integer('sub_category_id').nullable().unsigned().references('id').inTable('categories').onDelete('cascade')
      table.text('decription').nullable()
      table.integer('status').nullable().defaultTo(0).comment('0 - pending, 1 - Accepted, 2- Resolved')
      table.timestamps()
    })
  }

  down () {
    this.drop('tickets')
  }
}

module.exports = TicketsSchema
