const express = require('express');
const Product = require('./models/product');
const app = express();

// ---------------------------------------------------------------//
// ------------------------MONGOOSE----------------------------------//
const mongoose = require('mongoose');
const MONGO_STRING = 'mongodb+srv://arolson87:mniahjyw8@cluster0.lqjpj.mongodb.net/mongoose_store?retryWrites=true&w=majority'
const PORT = 3000;

mongoose.connect(MONGO_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> { console.log('connected to mongo'); });

// --------------------END MONGOOSE----------------------------------//

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


app.get('/', (req, res) => {
    res.send('Hello World');
})

// ---------------------------------------------------------------//
// ------------------------INDEX------------------------------------//


app.get('/product', (req, res)=>{
    Product.find({}, (err, allProducts)=>{
        res.render('Index', {
            product: allProducts
        });
    });
});

// ---------------------------------------------------------------//
// ------------------------NEW------------------------------------//


app.get('/product/new', (req, res)=>{
    res.render('New');
});

// ---------------------------------------------------------------//
// ------------------------CREATE------------------------------------//

app.post('/product/add', (req, res)=> {
    Product.create(req.body);
    res.redirect('/product');
})


// ---------------------------------------------------------------//
// ------------------------SHOW------------------------------------//


app.get('/product/:id', (req, res)=>{
    Product.findById(req.params.id, (err, foundProduct)=>{
        res.render('Show', {
            product:foundProduct
        });
    });
});



app.listen(PORT, ()=>{
    console.log('listening');
});
