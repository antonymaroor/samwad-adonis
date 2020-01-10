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
const Video = use('App/Models/Video')
const Env = use('Env')

class VideoSeeder {
  async run () {

  	await Video.createMany([
        {
            "category_id": 51,
            "title": "Apache RR 310",
            "thumbnail": Env.get('APP_URL')+'/default.png',
            "url": "https://youtu.be/cgZjsvKko-s"
        },
        {
            "category_id": 61,
            "title":"Honda CB 1000RR",
            "thumbnail": Env.get('APP_URL')+'/default.png',
            "url": "https://youtu.be/hfuTJ9D04zA"
        }]);

  }
}

module.exports = VideoSeeder
