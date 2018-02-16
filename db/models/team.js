const Sequelize = require('sequelize')

module.exports = db => db.define('Team', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})