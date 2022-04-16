const express = require('express')
// const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;
const app = express()



app.get('*', (req,res)=>{
    res.sendFile(__dirname +'/public/index.html')
});

app.get('/notes', (req,res)=>{
    res.sendFile(__dirname + '/public/notes.html');
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });