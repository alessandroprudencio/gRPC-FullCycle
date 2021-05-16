const express = require('express')
const app = express()
const port = 3000

const usersRoutes = require('./routes/users')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded

app.use('/users', usersRoutes)

app.listen(port, '0.0.0.0', () => {
    console.log(`App listening at http://localhost:${port}`)
})
