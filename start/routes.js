'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')



Route.group(() => {
  Route.get('categories', 'CategoryController.index').as('categories.index')
}).prefix('admin').namespace('Admin')


Route.group(() => {
  Route.get('categories', 'CategoryController.index').as('categories.index')
  Route.get('categories/:category', 'CategoryController.show').as('categories.show')
  Route.post('tickets', 'TicketController.store').as('tickets.store');
  Route.get('tickets/:customer', 'TicketController.index').as('tickets.get');
  Route.get('tickets/:customer/show/:ticket', 'TicketController.show').as('tickets.show');
}).prefix('api/v1').namespace('Api/V1')

