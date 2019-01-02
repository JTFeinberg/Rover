'use strict'

const db = require('../server/db')
const {User, Vet} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const vets = await Promise.all([
    Vet.create({
      email: 'jdelisle0@purevolume.com',
      name: 'Joleen',
      location: '652 Sunfield Lane',
      image: 'http://dummyimage.com/215x178.png/cc0000/ffffff'
    }),
    Vet.create({
      email: 'ewestbrook1@ezinearticles.com',
      name: 'Elka',
      location: '059 Redwing Center',
      image: 'http://dummyimage.com/174x236.bmp/cc0000/ffffff'
    }),
    Vet.create({
      email: 'eughelli2@opensource.org',
      name: 'Egbert',
      location: '06 Mallard Crossing',
      image: 'http://dummyimage.com/162x159.png/ff4444/ffffff'
    }),
    Vet.create({
      email: 'dmacarthur3@moonfruit.com',
      name: 'Denver',
      location: '787 Mcbride Road',
      image: 'http://dummyimage.com/134x188.bmp/cc0000/ffffff'
    }),
    Vet.create({
      email: 'mbuye4@jalbum.net',
      name: 'Moira',
      location: '956 Waxwing Circle',
      image: 'http://dummyimage.com/216x220.png/dddddd/000000'
    }),
    Vet.create({
      email: 'kjacquet5@jalbum.net',
      name: 'Kym',
      location: '767 Forest Dale Terrace',
      image: 'http://dummyimage.com/248x126.png/5fa2dd/ffffff'
    }),
    Vet.create({
      email: 'amullin6@drupal.org',
      name: 'Arlin',
      location: '5 Steensland Circle',
      image: 'http://dummyimage.com/101x142.png/cc0000/ffffff'
    }),
    Vet.create({
      email: 'sbiles7@elpais.com',
      name: 'Susy',
      location: '687 Chinook Lane',
      image: 'http://dummyimage.com/155x161.bmp/dddddd/000000'
    }),
    Vet.create({
      email: 'eparkman8@tuttocitta.it',
      name: 'Erica',
      location: '03 Monterey Parkway',
      image: 'http://dummyimage.com/225x150.jpg/dddddd/000000'
    }),
    Vet.create({
      email: 'ithreadgold9@uiuc.edu',
      name: 'Ingamar',
      location: '687 Loeprich Plaza',
      image: 'http://dummyimage.com/196x199.bmp/ff4444/ffffff'
    }),
    Vet.create({
      email: 'ibecceraa@dion.ne.jp',
      name: 'Iago',
      location: '4 Maywood Place',
      image: 'http://dummyimage.com/141x230.png/5fa2dd/ffffff'
    }),
    Vet.create({
      email: 'ggorseb@webnode.com',
      name: 'Gisele',
      location: '71 Hagan Drive',
      image: 'http://dummyimage.com/179x147.png/5fa2dd/ffffff'
    }),
    Vet.create({
      email: 'ceddisc@lycos.com',
      name: 'Charil',
      location: '78691 Myrtle Junction',
      image: 'http://dummyimage.com/105x133.bmp/cc0000/ffffff'
    }),
    Vet.create({
      email: 'jbarockd@desdev.cn',
      name: 'Jae',
      location: '57504 Melody Road',
      image: 'http://dummyimage.com/235x150.png/dddddd/000000'
    }),
    Vet.create({
      email: 'danelaye@house.gov',
      name: 'Dru',
      location: '42 Maple Avenue',
      image: 'http://dummyimage.com/225x199.bmp/dddddd/000000'
    }),
    Vet.create({
      email: 'wguyonnetf@sphinn.com',
      name: 'Whitney',
      location: '3554 Golf View Drive',
      image: 'http://dummyimage.com/211x139.jpg/dddddd/000000'
    }),
    Vet.create({
      email: 'ebendong@msn.com',
      name: 'Everett',
      location: '1 Pepper Wood Road',
      image: 'http://dummyimage.com/134x184.bmp/ff4444/ffffff'
    }),
    Vet.create({
      email: 'tchidlerh@hibu.com',
      name: 'Tobiah',
      location: '277 Grover Road',
      image: 'http://dummyimage.com/230x186.bmp/ff4444/ffffff'
    }),
    Vet.create({
      email: 'mmeagheri@msn.com',
      name: 'Melany',
      location: '38602 Sloan Street',
      image: 'http://dummyimage.com/205x139.jpg/dddddd/000000'
    }),
    Vet.create({
      email: 'glagoj@blogs.com',
      name: 'Gunther',
      location: '09 Westerfield Junction',
      image: 'http://dummyimage.com/148x100.bmp/5fa2dd/ffffff'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
