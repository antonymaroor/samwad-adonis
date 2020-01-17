'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ticket extends Model {
  static boot () {
    super.boot()

  }

  static get hidden () {
    return ['category_id', 'sub_category_id', 'updated_at']
  }

  category () {
    return this.belongsTo('App/Models/Category')
  }

  subCategory () {
    return this.belongsTo('App/Models/Category', 'sub_category_id')
  }

}

module.exports = Ticket
