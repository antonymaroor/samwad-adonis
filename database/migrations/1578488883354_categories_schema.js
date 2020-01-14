'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriesSchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.string('title', 254).notNullable().unique()
      table.string('icon', 254).notNullable()
      table.text('short_description').nullable()
      table.text('long_description').nullable()
      table.string('redirect_type').nullable()
      table.string('chat_id', 254).nullable().unique()
      table.boolean('status').default(1)
      table.integer('category_id').nullable().unsigned().references('id').inTable('categories').onDelete('set null')
      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategoriesSchema
