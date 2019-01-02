const Sequelize = require('sequelize')
const db = require('../db')

const Vet = db.define('vet', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Vet
