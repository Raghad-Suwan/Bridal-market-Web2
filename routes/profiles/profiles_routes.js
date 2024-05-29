const { render } = require('ejs');
const express = require('express');
const router = express.Router();

const profile = require('../../controllers/userController');
const isAuth = require('../../middleware/is-auth');



router.get('/profile', profile.ProfilePage);
router.get('/providerprofile', profile.ProviderProfilePage);
router.get('/editproviderprofile', profile.EditProviderProfilePage);

router.get('/editprofile', isAuth, profile.EditProfilePage);
router.post('/editprofile', profile.updateUserProfile);

module.exports = router;
