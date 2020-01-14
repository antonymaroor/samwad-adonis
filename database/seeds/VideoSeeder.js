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
            "category_id": 6,
            "title": "Deposit - sample",
            "thumbnail": Env.get('APP_URL')+'/default.png',
            "url": Env.get('APP_URL')+'/default_video.mp4',
        },
        {
            "category_id": 8,
            "title":"Loan - sample",
            "thumbnail": Env.get('APP_URL')+'/default.png',
            "url": Env.get('APP_URL')+'/default_video.mp4',
        },
        {
            "category_id": 10,
            "title":"Cards - sample",
            "thumbnail": Env.get('APP_URL')+'/default.png',
            "url": Env.get('APP_URL')+'/default_video.mp4',
        },
        {
            "category_id": 12,
            "title":"Insurance - sample",
            "thumbnail": Env.get('APP_URL')+'/default.png',
            "url": Env.get('APP_URL')+'/default_video.mp4',
        },
        {
            "category_id": 14,
            "title":"Investments - sample",
            "thumbnail": Env.get('APP_URL')+'/default.png',
            "url": Env.get('APP_URL')+'/default_video.mp4',
        }]);

  }
}

module.exports = VideoSeeder
