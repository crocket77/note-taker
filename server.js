const express = require('express')
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// app.get('*', (req,res)=>{
//     res.sendFile(__dirname +'/public/index.html')
// });

// app.get('/notes', (req,res)=>{
//     res.sendFile(__dirname + '/public/notes.html');
// });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });