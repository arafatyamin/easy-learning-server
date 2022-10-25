const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const course = require('./data/courses.json')

app.get('/', (req, res) =>{ 
    res.send('courses api running')
})



app.listen(port, () => {
    console.log(`course server running port ${port}`);
})