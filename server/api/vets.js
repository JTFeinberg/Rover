const router = require('express').Router()
const {Vet} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  const vets = await Vet.findAll()
  res.json(vets)
})
