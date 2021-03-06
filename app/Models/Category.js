'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  static boot () {
    super.boot()
  }

  static get hidden () {
    return ['status', 'created_at', 'updated_at', 'category_id', 'chat_id']
  }

  videos () {
    return this.hasMany('App/Models/Video')
  }

  childCategories() {
  	return this.hasMany('App/Models/Category')
  }

}

module.exports = Category
