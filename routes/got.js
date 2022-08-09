const express = require('express')
const app = express()
const characters = require('../characters.json')
const axios = require("axios")

// Créer une route qui renverra le contenu du fichier json
app.get('/json', (req, res) => {
    res.json(characters)
})

// Créer une route qui renverra la réponse de l'API game of thrones
app.get('/url', async(req, res) => {
    const response = await axios.get("https://thronesapi.com/api/v2/Characters")
    res.json(response.data)
})




module.exports = app