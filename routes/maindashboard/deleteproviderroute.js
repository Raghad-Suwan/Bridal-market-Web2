
const express = require('express');
const router = express.Router();
const Provider = require('../maindashboard/models/allproviders');

router.delete('/:providerId', async (req, res) => {
    const { providerId } = req.params;
    try {
        const deletedProvider = await Provider.findByIdAndDelete(providerId);
        if (!deletedProvider) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.redirect('/allserviceproviders');
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
