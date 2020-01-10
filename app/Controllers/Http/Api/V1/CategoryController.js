'use strict'
const Category = use('App/Models/Category')

class CategoryController {

  async index ({ request, response }) {
    const categories = await Category.query().whereNull('category_id').where('status',1).with('childCategories').fetch()
   // response.send(categories.toJSON())
   return response.status(200).json(categories)
  }

  async show ({ request, response }) {
  	const category = await Category.find(request.params.category)

  	let data = '';


    if(category == null)
    {
      data = {'error' : 'Category not found'}

    }
  	else if(category.redirect_type == 'video') {
  		data = await category.videos().where('status',1).fetch()
  	}
  	else if(category.redirect_type == 'chat')
  	{
  		data = {chat_id : category.chat_id}
  	}
    else
    {
      data = {'error' : 'Please select a subcategory'}
    }  

  	return response.status(200).json(data)
  }

}

module.exports = CategoryController
