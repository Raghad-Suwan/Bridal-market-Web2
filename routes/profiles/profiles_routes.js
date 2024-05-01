const { render } = require('ejs');
const express = require('express');
const router = express.Router();


const profile = require('../../controllers/userController')



router.get('/profile', profile.ProfilePage)
router.get('/editprofile', profile.EditProfilePage)
router.get('/providerprofile', profile.ProviderProfilePage)
router.get('/editproviderprofile', profile.EditProviderProfilePage)

module.exports = router;
