const Celebrity = require('../models/Celebrity.model')

const router = require('express').Router()


router.get('/create', (req, res, next)  => { // the router is already set the root link, no need full path here
 res.render('celebrities/new-celebrities')
})


router.post('/create', async(req, res) => {
  try {
   // throw new Error('error')
    await Celebrity.create({
      name: req.body.name,
      accupation: req.body.accupation,
      catchPhrase: req.body.catchPhrase,
    })
  res.redirect('/celebrities')
  } catch (error) {
    res.render('celebrities/new-celebrities', {errorMessage: 'Something wrong, please try again'}) // here is rendering instead of redirecting because it'll bounce back to client 
  }
})


module.exports = router