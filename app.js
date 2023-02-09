const express = require('express')
const { connectToDb, getDb } = require('./db')

//init app & middleware
const app = express()

//db connection 
let db
connectToDb((err) => {
    if(!err) {
        app.listen(3000, () => {
            console.log('App listening on port 3000');
        })
        db = getDb()
    }
})



//routes
app.get('/Books', (req, res) => {

    db.collection('Books')  //db.Books
        .find()     //cursor pointer toArray forEach
        .sort({ author: 1})
        .forEach(book => Books.push(book))
        .then(() => {
            res.status(200).json(Books)
        })
        .catch(() => {
            res.status(500).json({error: "Could not fetch the documents"})
        })
})