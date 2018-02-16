const api = module.exports = require('express').Router()

api.use((req, res) => res.status(404).end())