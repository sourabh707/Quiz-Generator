const express = require('express')
const path = require('path')//path module import
var exphbs = require('express-handlebars')
const app = express()
const port = 5001


app.engine('handlebars',exphbs());
app.set('view engine','handlebars');


app.use(express.static(path.join(__dirname,"static")))

app.use('/',require(path.join(__dirname,"routes/app.js")))
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
