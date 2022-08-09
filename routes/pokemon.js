const express = require('express')
const app = express()
const axios = require("axios")

// app.get('/url', async(req, res) => {
//     const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
//     res.json(response.data)
// })

app.get('/url', async(req, res) => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1")
    res.json(response.data)
})


// app.get('/url/:id', async(req, res) => {
//     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?${id}`)
//     res.json(response.data)
// })

module.exports = app