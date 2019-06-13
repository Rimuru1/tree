const express = require('express');
const jwt = require('jsonwebtoken')
const app = express();
const bodyParser = require('body-parser');
require('./api');
const FeedbackModel = require('./user');
const User = require('./user')
const cors = require('cors')
const Product = require('./product')
const Stroe = require('./stroe')
const SrcProduct = require('./search')
const multer = require('./multer')


const PORT = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors())

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

app.listen(PORT, function () {
    console.log("server is running " + PORT);
})


app.get('/', (req, res) => {
    res.end("root");
});


app.get('/home', (req, res) => {
    res.end("home");


});

app.post('/api/photo',function(req,res){
    upload(req,res,function(err) {
        console.log(req.body);
        console.log(req.files);
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});
// UpdetProduct
app.put('/update/:id', (req, res) => {
    Product.findByIdAndUpdate({_id:req.body.id}, (err, product) =>{
        //console.log(Product)
            product.productName = req.body.productName;
            product.type = req.body.type;
            product.price = req.body.price;
            product.image = req.body.image;
            product.save((err, product) =>{
        if(err){
            res.send('NOOOOOOOOOO!!!!');
            next();
        }
        res.json(product)
        })
    })
})
    


// deleteProduct
app.delete('/delete/:id',(req, res) => {
    Product.findByIdAndRemove({_id:req.params.id}, (err, product) => {
        if(err){
            res.send('NOOOOOOOOOO!!!!');
            next();
        }
        res.send('successfuly');
    })
    
})
app.get('/product',(req, res) => {
    var query = {SrcProduct};
    Product.find({} , (err,product) => {
        if(err){
            res.send('somthing');
            next();
        }
        res.json(product);
    })

});

app.post('/register', (req, res) => {

    let userData = req.body
    let user = User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).send({token})
        }
    })

});

app.post('/product', (req, res) => {

    let productData = req.body
    let product = Product(productData)
    product.save((error, addproduct) => {
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: addproduct._id }
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).json(productData);
        }
    })

});
app.post('/stroe', (req, res) => {

    let stroeData = req.body
    let stroe = Stroe(stroeData)
    stroe.save((error, createmarket) => {
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: createmarket._id }
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).json(stroeData)
        }
    })

});


app.post('/login', (req, res) => {
    let userData = req.body

    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid email')
            } else
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid password')
                } else {
                    let payload = { subject: user._id }
                    let token = jwt.sign(payload, 'secretkey')
                    res.status(200).json(user)
                }
        }
    })
})

module.exports = app