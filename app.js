const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.get('/api/test-endpoint', (req,res) => {
    res.status(200).json({id: 1, text: 'Test Endpoint Description One'})
})

app.listen(port, () => {
    console.log(`Listening, visit http://localhost:${port}`)
})

module.exports = app