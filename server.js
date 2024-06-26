const express = require('express')
const app = express()

app.set('view engine', 'ejs')


app.get('/', (req, res, next) => {
    console.log('Here')
    // res.download("server.js")
    // res.status(500).json({ message: "Error"})
    res.render('index', { text: "hello world" })
})

app.listen(3000)

