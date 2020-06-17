
// this brings in express to our application and sets up server
const express = require('express');
const body_parser = require('body-parser');
const mongodb = require('mongodb');
const path = require('path');
// run the function for the app variable
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// defining a port variable
const PORT = process.env.PORT || 3000;
// allows app to look inside the views folder to use the EJS
app.set('view engine', 'ejs');
// ///////////////////////////

// middleware functions
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

// connect to Database
// let mongo_client = MongoCLient;
// mongo_client.connect(DB_URL, (err, db_client) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(`connect to ${FOODUBANK_DB} database.`);
//         db_handler = db_client.db(FOODUBANK_DB);
//     }
// });

// ///////////////////////////////////////////////

// connects/ links to css sheet , this will let my app access the public directory
app.use(express.static(path.join(__dirname, 'public')));


// ///////////////////////////////////////////////
// gets home page
app.get('/', (req, res) => {
    res.render('index');
});

// gets the food pickUp page from views folder
app.get('/foodPickup', (req, res) => {
    res.render('foodPickUp');
});

// sign in page
app.get('/signIn', (req, res) => {
    res.render('signIn');
});

// volunteer page
app.get('/volunteer', (req, res) => {
    res.render('volunteer');
});

// Host ideas page submission
app.get('/hostIdeas', (req, res) => {
    res.render('hostIdeas');
});

// online order button route
app.get('/onlineChoice', (req, res) => {
    res.render('onlineChoice');
});
// locations and events
app.get('/locationEvents', (req, res) => {
    res.render('locationEvents');
});

// contact page
app.get('/contact', (req, res) => {
    res.render('contact');
});

// about us page
app.get('/aboutUs', (req, res) => {
    res.render('aboutUs');
});

// Privacy policy page
app.get('/privacyPolicy', (req, res) => {
    res.render('privacyPolicy');
});
// terms and conditions page
app.get('/termsConditions', (req, res) => {
    res.render('termsConditions');
});
// Submit message page
app.get('/successMessage', (req,res) => {
    res.render('successMessage');
})

// /////////////////////////////////////////////////////////////
// declaring db handler
let db_handler;
const DB_URL = process.env.DB_URL;
const VOLUNTEER_COLLECTION = process.env.VOLUNTEER_COLLECTION;
const FOODUBANK_DB = process.env.FOODUBANK_DB;
const ONLINE_ORDER_COLLECTION = process.env.ONLINE_ORDER_COLLECTION;

// /////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////
// this post route will be for the sign in page PHASE 2
// app.post('/signIn' , (req,res) => {
//     const form_data = req.body;
//     const name = form_data['clientname'];
//     const email = form_data ['email']
// })

// /////////////////////////////////////////////////////
// online choice order submission section
app.post('/addOrder', (req, res) => {
    // when user clicks submit on the form, the form data is sent to the server through the request object and to access the form data we go through req.body
    const form_data = req.body;
    // when user selects package type in the form. the value will be stored in the variable packagetype and we are accesing the value by using the bracket notation. 
    const packageType = form_data['packageType'];
    const numpackages = form_data['numpackages'];
    const orderName = form_data['orderName'];
    // we are storing the values from the form data into an object called selection which will eventually be storedd in our database.
    let selection = {
        namepackage: packageType,
        numberOrdr: numpackages,
        customer: orderName
    };

    db_handler.collection(ONLINE_ORDER_COLLECTION).insertOne(selection, (err, result) => {
        if (err) {
            console.log("Error: " + err);
        }
        else {
            console.log("One Entry Added");
            // res.redirect('/');
            res.render('successMessage');
            // res.location('/successMessage');
        }
    });
} )
// /////////////////////////////////////////////////////
// This is for the form submission on volunteers page via Host Ideas EJS.

app.post('/addSuggestion', (req, res) => {
    const form_data = req.body;
    const username = form_data['username'];
    const email = form_data['emailinfo'];
    const hostInput = form_data['hostInput'];

    let hostSuggestion = {
        name: username,
        useremail: email,
        hostMessage: hostInput
    };
    db_handler.collection(VOLUNTEER_COLLECTION).insertOne(hostSuggestion, (err, result) => {
        if (err) {
            console.log("Error: " + err);
        }
        else {
            console.log("One Entry Added");
            res.render('successMessage');
        }
    });
})

// calls the PORT to run the website

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
    let mongo_client = mongodb.MongoClient;
    mongo_client.connect(DB_URL, (err, db_client) => {
        if (err) {
            console.log("Error: " + err);
        }
        else {
            console.log("Database Connected");
            db_handler = db_client.db(FOODUBANK_DB);
        }
    });

});