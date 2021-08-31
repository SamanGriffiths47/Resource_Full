// const db = require('../db')
// const {} = require('../models')
// const CommentSchema = require('../models/comment')

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// const main = async () => {
//   const posts = [
//     {
//       authorName: 'Roger',
//       description: 'jiggly puff',
//       language: 'Markdowm',
//       skill: 'general',
//       link: 'https://guides.github.com/features/mastering-markdown/',
//       comments: [comments[1]._id, comments[4]._id, comments[5]._id]
//     },
//     {
//       authorName: 'Jenny',
//       description: 'jiggly puff',
//       language: 'MongoDB',
//       skill: 'CRUD',
//       link: 'https://docs.mongodb.com/manual/crud/',
//       comments: [comments[2]._id]
//     },
//     {
//       authorName: 'DeNae',
//       description: 'jiggly puff',
//       language: ['MongoDB', 'Node.js'],
//       skill: ['Child Referencing', 'Parent Referencing'],
//       link: 'https://dev.to/oluseyeo/how-to-create-relationships-with-mongoose-and-node-js-11c8',
//       comments: [comments[0]._id, comments[3]._id]
//     }
//   ]

//   const comments = [
//     {
//       authorName: 'Nike',
//       comment: 'woooow',
//       parentPost: posts[2]._id
//     },
//     {
//       authorName: 'Adidas',
//       comment: 'noice',
//       parentPost: posts[0]._id
//     },
//     {
//       authorName: 'New Balance',
//       comment: 'haberdashery',
//       parentPost: posts[1]._id
//     },
//     {
//       authorName: 'Adidas',
//       comment: 'duuuude',
//       parentPost: posts[2]._id
//     },
//     {
//       authorName: 'Nike',
//       comment: 'ca-caw',
//       parentPost: posts[0]._id
//     },
//     {
//       authorName: 'Puma',
//       comment: 'leedle-leedle-leedle-lee',
//       parentPost: posts[0]._id
//     }
//   ]

//   await CommentSchema.insertMany(comments)
//   console.log('Created shoes!')
// }

// const run = async () => {
//   await main()
//   db.close()
// }

// run()
