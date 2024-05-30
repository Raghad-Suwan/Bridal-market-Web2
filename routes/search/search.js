const { render } = require('ejs'); 
const express = require('express'); 
const router = express.Router(); 
const search = require('../../controllers/searchController');


router.get("/searchPage", search.search)
router.post("/searchPage", search.searchSupmit)


    
module.exports = router;  
