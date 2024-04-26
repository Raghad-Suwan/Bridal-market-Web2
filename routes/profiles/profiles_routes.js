const { render } = require('ejs');
const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
    res.render('profile');
});

router.get('/editprofile', (req, res) => {
    res.render('editprofile');
});

router.get('/providerprofile', (req, res) => {
    res.render('providerprofile');
});

router.get('/editproviderprofile', (req, res) => {
    res.render('editproviderprofile');
});

module.exports = router;
