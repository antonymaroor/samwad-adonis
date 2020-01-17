'use strict'
const Ticket = use('App/Models/Ticket')
const { validate } = use('Validator')

class TicketController {

  async index({ request, response }) {
    
    const customer = await Ticket.query().where('customer_id',request.params.customer).with(['subCategory']).with(['category']).fetch()
   
    if(customer == null)
    {
      var resp = {'status':'error','data':'Customer not found'}

    }

    return response.json({status:'success', data: customer});

  }


  async store ({ request, response }) {


    const rules = {
      customer_name: 'required',
      customer_id: 'required',
      category: 'required',
      sub_category: 'required',
    }

    const validation = await validate(request.all(), rules)

    if (validation.fails()) {
      return response.json({status:'error',data:validation.messages()})
    }

    const customerName = request.input('customer_name')
    const customerId = request.input('customer_id')
    const categoryId = request.input('category')
    const subCategoryId = request.input('sub_category')
    const description = request.input('description')


    const ticket = new Ticket()
    ticket.issue_number = Math.floor(1000000000 + Math.random() * 9000000000);
    ticket.customer_name = customerName
    ticket.customer_id = customerId
    ticket.category_id = categoryId
    ticket.sub_category_id = subCategoryId
    ticket.decription = description

    await ticket.save()
    return response.json({status:'success', data: ticket});

  }


  async show({ request, response })
  {
    const ticket = await Ticket.query().where('customer_id',request.params.customer).where('id',request.params.ticket).with(['subCategory']).with(['category']).fetch()
   
    if(ticket == null)
    {
      var resp = {'status':'error','data':'Customer not found'}

    }

    return response.json({status:'success', data: ticket});    
  }

}

module.exports = TicketController
