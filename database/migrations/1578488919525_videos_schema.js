'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VideosSchema extends Schema {
  up () {
    this.create('videos', (table) => {
      table.increments()
      table.integer('category_id').nullable().unsigned().references('id').inTable('categories').onDelete('set null')
      table.string('title', 254).notNullable()
      table.string('thumbnail', 254).notNullable()
      table.string('url', 254).notNullable()
      table.boolean('status').default(1)
      table.timestamps()
    })
  }

  down () {
    this.drop('videos')
  }
}

module.exports = VideosSchema
