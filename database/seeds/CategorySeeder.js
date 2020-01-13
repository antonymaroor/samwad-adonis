'use strict'

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const Category = use('App/Models/Category')
const Env = use('Env')

class CategorySeeder {
  async run () {

  	await Category.createMany([
        {
            "title": "Deposits",
            "icon": Env.get('APP_URL')+'/default.png',
            "short_description": "A sum payable as a first instalment on the purchase of something or as a pledge for a contract, the balance being payable later.",
            "long_description": "A sum payable as a first instalment on the purchase of something or as a pledge for a contract, the balance being payable later.",
        },
        {
            "title": "Loans",
            "icon": Env.get('APP_URL')+'/default.png',
            "short_description": "In finance, a loan is the lending of money by one or more individuals, organizations, or other entities to other individuals, organizations etc. The recipient incurs a debt, and is usually liable to pay interest on that debt until it is repaid, and also to repay the principal amount borrowed.",
            "long_description": "In finance, a loan is the lending of money by one or more individuals, organizations, or other entities to other individuals, organizations etc. The recipient incurs a debt, and is usually liable to pay interest on that debt until it is repaid, and also to repay the principal amount borrowed.",
        },
        {
            "title": "Cards",
            "icon": Env.get('APP_URL')+'/default.png',
            "short_description": "containing personal data in a machine-readable form and used to obtain cash or credit or to pay for a telephone call, gain entry to a room or building, etc",
            "long_description": "containing personal data in a machine-readable form and used to obtain cash or credit or to pay for a telephone call, gain entry to a room or building, etc",
        },
        {
            "title": "Insurance",
            "icon": Env.get('APP_URL')+'/default.png',
            "short_description": "Arrangement by which a company or the state undertakes to provide a guarantee of compensation for specified loss, damage, illness, or death in return for payment of a specified premium.",
            "long_description": "Arrangement by which a company or the state undertakes to provide a guarantee of compensation for specified loss, damage, illness, or death in return for payment of a specified premium.",
        },
        {
            "title": "Investments",
            "icon": Env.get('APP_URL')+'/default.png',
            "short_description": "To invest is to allocate money in the expectation of some benefit in the future. In finance, the benefit from an investment is called a return.",
            "long_description": "To invest is to allocate money in the expectation of some benefit in the future. In finance, the benefit from an investment is called a return.",
        },
        {
            "title": "Deposits - How safe",
            "icon": Env.get('APP_URL')+'/default.png',
            "short_description": "No laws exist that prevent you from keeping cash in a safe deposit box. However, while not illegal, bankers typically discourage customers from keeping cash in safe deposit boxes because funds inside the box are not insured.",
            "long_description": "No laws exist that prevent you from keeping cash in a safe deposit box. However, while not illegal, bankers typically discourage customers from keeping cash in safe deposit boxes because funds inside the box are not insured.",
        	"redirect_type":"video",
            "category_id":1,
        },
        {
            "title": "Chat with us",
            "icon": Env.get('APP_URL')+'/default.png',
            "short_description": "Free Chat Rooms Online With No Registration, you can enter and start chat without registration.",
            "long_description": "Free Chat Rooms Online With No Registration, you can enter and start chat without registration.",
        	"redirect_type":"chat",
        	"chat_id":1,
            "category_id":1,
        },
        {
            "title": "Loans - How safe",
            "icon": Env.get('APP_URL')+'/default.png',
            "short_description": "No laws exist that prevent you from keeping cash in a safe deposit box. However, while not illegal, bankers typically discourage customers from keeping cash in safe deposit boxes because funds inside the box are not insured.",
            "long_description": "No laws exist that prevent you from keeping cash in a safe deposit box. However, while not illegal, bankers typically discourage customers from keeping cash in safe deposit boxes because funds inside the box are not insured.",
            "redirect_type":"video",
            "category_id":11,
        },
        {
            "title": "Chat with us",
            "icon": Env.get('APP_URL')+'/default.png',
            "short_description": "Free Chat Rooms Online With No Registration, you can enter and start chat without registration.",
            "long_description": "Free Chat Rooms Online With No Registration, you can enter and start chat without registration.",
            "redirect_type":"chat",
            "chat_id":1,
            "category_id":11,
        },
        {
            "title": "Cards - How safe",
            "icon": Env.get('APP_URL')+'/default.png',
            "short_description": "No laws exist that prevent you from keeping cash in a safe deposit box. However, while not illegal, bankers typically discourage customers from keeping cash in safe deposit boxes because funds inside the box are not insured.",
            "long_description": "No laws exist that prevent you from keeping cash in a safe deposit box. However, while not illegal, bankers typically discourage customers from keeping cash in safe deposit boxes because funds inside the box are not insured.",
            "redirect_type":"video",
            "category_id":21,
        },
        {
            "title": "Chat with us",
            "icon": Env.get('APP_URL')+'/default.png',
            "short_description": "Free Chat Rooms Online With No Registration, you can enter and start chat without registration.",
            "long_description": "Free Chat Rooms Online With No Registration, you can enter and start chat without registration.",
            "redirect_type":"chat",
            "chat_id":1,
            "category_id":21,
        },
        {
            "title": "Insurance - How safe",
            "icon": Env.get('APP_URL')+'/default.png',
            "short_description": "No laws exist that prevent you from keeping cash in a safe deposit box. However, while not illegal, bankers typically discourage customers from keeping cash in safe deposit boxes because funds inside the box are not insured.",
            "long_description": "No laws exist that prevent you from keeping cash in a safe deposit box. However, while not illegal, bankers typically discourage customers from keeping cash in safe deposit boxes because funds inside the box are not insured.",
            "redirect_type":"video",
            "category_id":31,
        },
        {
            "title": "Chat with us",
            "icon": Env.get('APP_URL')+'/default.png',
            "short_description": "Free Chat Rooms Online With No Registration, you can enter and start chat without registration.",
            "long_description": "Free Chat Rooms Online With No Registration, you can enter and start chat without registration.",
            "redirect_type":"chat",
            "chat_id":1,
            "category_id":31,
        },
        {
            "title": "Investments - How safe",
            "icon": Env.get('APP_URL')+'/default.png',
            "short_description": "No laws exist that prevent you from keeping cash in a safe deposit box. However, while not illegal, bankers typically discourage customers from keeping cash in safe deposit boxes because funds inside the box are not insured.",
            "long_description": "No laws exist that prevent you from keeping cash in a safe deposit box. However, while not illegal, bankers typically discourage customers from keeping cash in safe deposit boxes because funds inside the box are not insured.",
            "redirect_type":"video",
            "category_id":41,
        },
        {
            "title": "Chat with us",
            "icon": Env.get('APP_URL')+'/default.png',
            "short_description": "Free Chat Rooms Online With No Registration, you can enter and start chat without registration.",
            "long_description": "Free Chat Rooms Online With No Registration, you can enter and start chat without registration.",
            "redirect_type":"chat",
            "chat_id":1,
            "category_id":41,
        },]);

  }
}

module.exports = CategorySeeder
