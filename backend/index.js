const express = require('express');
const app = express();
const PORT = 3000;
const boardsRouter = require('./routes/boards')
const cors = require('cors')

//middleware
app.use(express.json())


// enables cors for all routes
app.use(cors())

// board routes
app.use('/boards', boardsRouter)

// main route

app.get('/', (req, res) => {
    res.send('Backend of Kudos Board!')
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});




// data storing kudos board and card information



// routes and query parameters specifying what to do with
// data based on user input