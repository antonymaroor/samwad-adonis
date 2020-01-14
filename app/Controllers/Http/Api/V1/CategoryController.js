'use strict'
const Category = use('App/Models/Category')

class CategoryController {

  async index ({ request, response }) {
    const categories = await Category.query().whereNull('category_id').where('status',1).with('childCategories').fetch()
    var resp = {'status':'success', 'data':categories}
   // response.send(categories.toJSON())
   return response.status(200).json(resp)
  }

  async show ({ request, response }) {
  	const category = await Category.find(request.params.category)
  	let data = '';


    if(category == null)
    {
      var resp = {'status':'error','data':'Category not found'}

    }
  	else if(category.redirect_type == 'video') {
  		data = await category.videos().where('status',1).fetch()
      var resp = {'status':'success', 'data':data}

  	}
  	else if(category.redirect_type == 'chat')
  	{
  		data = {chat_keyword : category.chat_id}
      var resp = {'status':'success', 'data':data}
  	}
    else
    {
      data = 'Please select a subcategory'
      var resp = {'status':'error', 'data':data}
    }  

  	return response.status(200).json(resp)
  }

}

module.exports = CategoryController
