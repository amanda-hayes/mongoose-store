const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    description:  { type: String, required: false },
    image:  { type: String, required: false },
    price:  { type: Number, required: false },
    quantity:  { type: Number, required: false },
});

const Product = mongoose.model('Product', productSchema);

// Product.create ([{
//     "name": "Lucky Charms",
//     "description": "Hearts, stars, horseshoes, clovers and blue moons, pots of golden rainbows and the red balloons! They're magically delicious!",
//     "image": "/assets/images/lucky-charms.jpeg",
//     "price": 3.00,
//     "quantity": 25
// }])


// Product.create ([{
//     "name": "Skip It",
//     "description": "Roarin' good fun, from Tiger Toys!",
//     "image": "/assets/images/skip-it.jpg",
//     "price": 20.00,
//     "quantity": 15
// }])

// Product.create ([{
//     "name": "Jellies",
//     "description": "Sandals made from PVC plastic with glitter inside! So pretty!",
//     "image": "/assets/images/jellies.jpg",
//     "price": 15.00,
//     "quantity": 20
// }])

// Product.create ([{
//     "name": "Dunkaroos",
//     "description": "Delicious cookies you can dip in frosting! Perfect for school lunches!",
//     "image": "/assets/images/dunkaroos.jpg",
//     "price": 4.00,
//     "quantity": 30
// }])

// Product.create ([{
//     "name": "Mary Kate & Ashley Olsen VHS Boxset",
//     "description": "Every single Olsen twins movie! Just ALL of them!",
//     "image": "/assets/images/olsen-twins.jpg",
//     "price": 50.00,
//     "quantity": 10
// }])

// Product.create ([{
//     "name": "POGS Value Pack",
//     "description": "Own your friends with 50 pogs and 2 slammers!",
//     "image": "/assets/images/pogs.jpg",
//     "price": 10.00,
//     "quantity": 20
// }])

// Product.create ([{
//     "name": "Rainbow Clear Telephone",
//     "description": "Have you always wanted to see inside a telephone? Well, now you can! Right on! Extended cord for portable use not included.",
//     "image": "/assets/images/clear-phone.jpg",
//     "price": 25.00,
//     "quantity": 9
// }])

// Product.create ([{
//     "name": "12 Pack of Surge",
//     "description": "Feed the Rush!",
//     "image": "/assets/images/surge.png",
//     "price": 7.00,
//     "quantity": 40
// }])

// Product.create ([{
//     "name": "Inflatable Chair",
//     "description": "Your room will look so fly with this big inflatable chair in it! Comes in purple, blue, pink and red.",
//     "image": "/assets/images/inflatable-chair.jpg",
//     "price": 25.00,
//     "quantity": 20
// }])

// Product.create ([{
//     "name": "Game Genie",
//     "description": "Want more power? More speed? More lives? Infinite lives? More weapons? Want to run faster, jump higher, punch harder? Start out on any level you choose? Even out the competition by giving more lives, powers or abilities to one player? Using the simple step-by-step instructions in the Game Genie manual, you can take command of your video games and be a video game master!",
//     "image": "/assets/images/game-genie.jpg",
//     "price": 30.00,
//     "quantity": 40
// }])

// Product.create ([{
//     "name": "Slap Bracelets",
//     "description": "Get 'em before they're banned at your school!",
//     "image": "/assets/images/slap-bracelet.jpg",
//     "price": 30.00,
//     "quantity": 40
// }])

// Product.create ([{
//     "name": "Lisa Frank Super Sticker Pack",
//     "description": "You gotta have it!",
//     "image": "/assets/images/lisa-frank.jpg",
//     "price": 10.00,
//     "quantity": 50
// }])

// Product.create ([{
//     "name": "Nickelodeon Radio",
//     "description": "It's also an alarm clock, but don't get SLIMED!",
//     "image": "/assets/images/nickelodeon-radio.jpg",
//     "price": 20.00,
//     "quantity": 18
// }])

// Product.create ([{
//     "name": "Goosebumps Book Collection",
//     "description": "All the classics, you choose the scare!",
//     "image": "/assets/images/goosebumps.jpg",
//     "price": 20.00,
//     "quantity": 18
// }])

// Product.create ([{
//     "name": "Fashion dress with tee",
//     "description": "Grab your Blossom-inspired hat and add a choker and walk into homeroom like all that and a bag of chips",
//     "image": "/assets/images/dress-shirt.jpg",
//     "price": 20.00,
//     "quantity": 15
// }])




module.exports = Product;