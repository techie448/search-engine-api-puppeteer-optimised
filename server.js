const express = require('express');
const app = express();
const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyBekBYiDu8qz4hcydS6hFSlTq9dehXIBs4",
    authDomain: "fir-test-a527c.firebaseapp.com",
    databaseURL: "https://fir-test-a527c.firebaseio.com",
    projectId: "fir-test-a527c",
    storageBucket: "fir-test-a527c.appspot.com",
    messagingSenderId: "287384582023",
    appId: "1:287384582023:web:2d169cc84fc9667a2fc522",
    measurementId: "G-6ZH57RS9YD"
};

let num = 0;
const ip = process.env.IP || '0.0.0.0';
const port = process.env.PORT || 8080;

//Import puppeteer function
const searchGoogle = require('./searchGoogle');

//Catches requests made to localhost:3000/search
app.get('/search', (request, res) => {

    //Holds value of the query param 'searchquery'.
    // const searchQuery = request.query.searchquery;

    //Do something when the searchQuery is not null.
    // if (searchQuery != null) {
    //
    //     searchGoogle(searchQuery)
    //         .then(results => {
    //             //Returns a 200 Status OK with Results JSON back to the client.
    //             response.status(200);
    //             response.json(results);
    //         });
    // } else {
    //     response.end();
    // }

    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    firebase.firestore()
        .collection('heroku')
        .doc(num.toString())
        .set({'test':'rishabh',
            'date': new Date()})
        .then((doc) => {
            res.json(doc);
        })
        .catch((error) => {
            res.json({ error });
        });
    num++;
});

//Catches requests made to localhost:3000/
app.get('/', (req, res) => res.send('Hello World!'));


//Initialises the express server on the port 30000
app.listen(port, ip);

