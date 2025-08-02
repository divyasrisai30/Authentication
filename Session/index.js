const express = require('express')

const app = express();

app.set('view engine', 'ejs')


//default route
app.get('/', (req, res)=>{
    res.render('home')
});

//login route
app.get('/login', (req, res)=>{
    res.render('login')
});

app.listen(3000, () => console.log('Server started at port 3000'))