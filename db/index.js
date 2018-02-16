const Sequelize = require('sequelize')
const dbUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/toast'

let db = new Sequelize(dbUrl, {logging: false})

const models = [
  require('./models/team')
]

models.forEach(model => {
  model(db)
})

// Associations

module.exports = {db}