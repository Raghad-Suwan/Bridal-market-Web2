
const express = require ('express');
const router = express.Router();
const Provider = require('../maindashboard/models/allproviders');
router.use(express.json());

router.put('/:providerId', async (req, res) => {
  const { providerId } = req.params;
  try {
      const provider = await Provider.findById(providerId);
      provider.activation = !provider.activation;
      await provider.save();
      location.reload();
      res.render('/allserviceproviders');
  } catch (error) {
      console.error('Error updating activation status:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});
module.exports = router; 
