const express = require('express');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.static('public'))


app.get('/', (req, res)=>{
    res.render('index')    
})

app.get('/first', (req, res)=>{
    res.render('first')
})


app.get('/second', (req, res)=>{
    res.render('second')
})

app.get('/third', (req, res)=>{
    res.render('third')
})
app.listen(3000, ()=>{
    console.log('...listen port 3000... AV');
})