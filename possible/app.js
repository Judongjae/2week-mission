const express = require('express');
const { Mongoose } = require('mongoose');
const app = express()
const port = 3000;
const bodyParser  = require('body-parser');

const mongoose = require('mongoose');
const { request } = require('express');



app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let name = req.query.name;
  res.render('create', {});
})

app.get('/posts', (req, res) => {
    let name = req.query.name;
    res.render('posts', {});
  })

app.get('/mongodb', async (req, res)=> {
    await mongoose.connect('mongodb://localhost/please', {
        useNewUrlParser: true
    });

    const { Schema } = mongoose;
    const postsSchema = new Schema({
        userid: {
            type: String
        },
        title:  {
            type: String
        },
        detail: {
            type: String
        },
        password:   {
            type: Number
        }
    }) 
    
    
    let Posts = mongoose.model("Posts", postsSchema)

    await Posts.create({
        userid_reveive = request.form['userid_give'],
        title_reveive = request.form['title_give'],
        detail_reveive = request.form['detail_give'],
        password_reveive = request.form['password_give']
    });
    res.send('OK')
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})