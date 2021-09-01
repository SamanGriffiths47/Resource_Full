// const db = require('../db')
// const {} = require('../models')
// const CommentSchema = require('../models/comment')

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// const main = async () => {
//   const posts = [
//     {
//       "user": "roger",
//       "userDisplay": "Roger",
//       "description": "jiggly puff",
//    "descriptionDisplay": "jiggly puff",
//       "language": "markdowm",
// "languageDisplay": "Markdowm",
//       "skill": "general",
// "skillDisplay":"general",
//       "link": "https://guides.github.com/features/mastering-markdown/",
//       "comments": []
//     },
//     {
//       "user": "jenny",
//       "userDisplay": "Jenny",
//       "description": "jiggly puff",
//    "descriptionDisplay": "jiggly puff",
//       "language": "mongodb",
// "languageDisplay": "MongoDB",
//       "skill": "crud",
// "skillDisplay":"CRUD",
//       "link": "https://docs.mongodb.com/manual/crud/",
//       "comments": []
//     },
// {
//   "user": "denae",
//   "userDisplay": "DeNae",
//   "description": "jiggly puff",
//    "descriptionDisplay": "jiggly puff",
//   "language": ["mongodb", "node.js"],
// "languageDisplay": ["MongoDB", "Node.js"],
//   "skill": ["child referencing", "parent referencing"],
// "skillDisplay":["Child Referencing", "Parent Referencing"],
//   "link": "https://dev.to/oluseyeo/how-to-create-relationships-with-mongoose-and-node-js-11c8",
//   "comments": []
// }
//   ]

//   const comments = [
//     {
//       "user": "nike",
//       "userDisplay": "Nike",
//       "comment": "woooow",
// "commentDisplay": "woooow",
//       "parentPost": posts[2]._id
//     },
//     {
//       "user": "adidas",
//       "userDisplay": "Adidas",
//       "comment": "noice",
// "commentDisplay": "noice",
//       "parentPost": posts[0]._id
//     },
//     {
//       "user": "new_balance",
//       "userDisplay": "New Balance",
//       "comment": "haberdashery",
// "commentDisplay": "haberdashery",
//       "parentPost": posts[1]._id
//     },
//     {
//       "user": "adidas",
//       "userDisplay": "Adidas",
//       "comment": "duuuude",
// "commentDisplay": "duuuude",
//       "parentPost": posts[2]._id
//     },
//     {
//       "user": "nike",
//       "userDisplay": "Nike",
//       "comment": "ca-caw",
// "commentDisplay": "ca-caw",
//       "parentPost": posts[0]._id
//     },
//     {
//       "user": "puma",
//       "userDisplay": "Puma",
//       "comment": "leedle-leedle-leedle-lee",
// "commentDisplay": "leedle-leedle-leedle-lee",
//       "parentPost": posts[0]._id
//     }
//   ]

//   await CommentSchema.insertMany(comments)
//   console.log("Created shoes!")
// }

// const run = async () => {
//   await main()
//   db.close()
// }

// run()
