
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

// ///////////////////////////////////////////////

// connects/ links to css sheet , this will let my app access the public directory
app.use(express.static(path.join(__dirname, 'public')));
// app.use('views' , path.join(__dirname, 'views'));

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

// /////////////////////////////////////////////////////////////
// store clients name

// declaring db handler
let db_handler;
const DB_URL = process.env.DB_URL;
const VOLUNTEER_COLLECTION = process.env.VOLUNTEER_COLLECTION;
const FOODUBANK_DB = process.env.FOODUBANK_DB;

// /////////////////////////////////////////////////////////////
// FOR collapse on food pick up page
// let coll = document.getElementsByClassName("collapsible");
// let i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     let content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }
// /////////////////////////////////////////////////////////////
// this post route will be for the sign in page PHASE 2
// app.post('/signIn' , (req,res) => {
//     const form_data = req.body;
//     const name = form_data['clientname'];
//     const email = form_data ['email']
// })

// this is for the form submission on volunteers page

// let submission_obj = {};
let confirmation_message = "Submission Successful";


app.post('/volunteer', (req, res) => {
    const form_data = req.body;
    const clientName = form_data['clientName'];

    const my_object = {
        "": clientName,
        "": bags
    };

    db_handler.collection(VOLUNTEER_COLLECTION).insert(submission_obj, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Submission successful");
        }
    });

    submission_obj.push();

    res.redirect('/');
});


// calls the PORT to run the website

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});