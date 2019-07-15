const express = require('express')
const moment = require('moment')
const request = require('request-promise')
const router = express.Router()

router.get('/', (req, res, next) => {
  request.get('https://wwwtest.heise.de/extras/devops/latest-news', {
    auth: {
      user: 'devops',
      pass: 'everywhere',
    },
    json: true,
    timeout: 2000,
  }).then(entries => {
    entries = entries.map(entry => {
      let date = moment(entry.datum).locale('de-DE')
      entry.dateRelative = date.fromNow()
      entry.date = date.format('LLL')
      return entry
    }).sort((a, b) => new Date(b.datum) - new Date(a.datum))

    res.render('index', {
      title: 'Latest news',
      entries,
    })
  }).catch(next)
})

module.exports = router
