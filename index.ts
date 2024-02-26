import { PrismaClient } from "@prisma/client";
// video used: https://www.youtube.com/watch?v=CYH04BJzamo
const prisma = new PrismaClient();

async function main() {
  //prisma queries

  // create a user
  // const user = await prisma.user.create({
  //     data:{
  //         name: "Alice",
  //         email: "alice@gmail.com"
  //     }
  // });

  //get all users
  // const users = await prisma.user.findMany();
  // console.log(users)

  // create an article and associate it with user
  //   const article = await prisma.article.create({
  //     data: {
  //       title: "Alice's First Article",
  //       body: "This is Alice's first article",
  //       author: {
  //         connect: { id: 1 },
  //       },
  //     },
  //   });
  //   console.log(article);

  // get all articles
  //   const articles = await prisma.article.findMany();
  //   console.log(articles);

  // create article and user and associate them
//   const user = await prisma.user.create({
//     data: {
//       name: "Joy Mobbs",
//       email: "joy@gmail.com",
//       articles: {
//         create: {
//           title: "Joy's First Article",
//           body: "This is Joy's first article",
//         },
//       },
//     },
//   });
//   console.log(user)



// to console log users along with their articles
// const userswithArticles = await prisma.user.findMany({
//     include: {
//         articles: true
//     }
// })
// console.log(userswithArticles)



// //create another article
// const articleforSarah = await prisma.article.create({
//     data:{
//         title: "Sarah's second Article",
//         body:"This is Sarah's second article",
//         author: {
//             connect: {id: 2}
//         }
//     }
// })


// get all of sarah's articles and loop through each article and print
// const sarahArticles = await prisma.article.findMany({
//     where:{
//         authorId: 2
//     }
// })
// sarahArticles.forEach(article=> (
//     console.log(article)
// ))




// loop through all the users articles

// const users = await prisma.user.findMany({});
// users.forEach(user =>(
//     console.log(`User: ${user.name} has the following articles: `)
//     user.articles.forEach(article=>{console.log(article.title)})
// ))


// //update a user
// const updated1User = await prisma.user.update({
//     where: {id: 1},
//     data: {
//         name: "Marco Smith"
//     }
// })
// console.log(updated1User)



// remove an article
// returns removed article
const removedArticle = await prisma.article.delete({
    where:{
        id: 2
    }
})
}



main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
