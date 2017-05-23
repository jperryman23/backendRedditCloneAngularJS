const express = require('express')
const path = require('path')
const app = express()
// const pg = require('./db/knex')
// const port = process.env.PORT || 3000


app.use('/', express.static(path.join(__dirname, '../client')))

app.get('/*', (req, res, next) => {
    const options = {
    root: path.join(__dirname, '../client')
}

res.sendFile('index.html', options, (err) =>{
    if(err) {
        next(err)
    }
    else {
        console.log('index sent to client')
    }
})
})


app.listen(3000, ()=>{
    console.log('app running on 3000');
})
