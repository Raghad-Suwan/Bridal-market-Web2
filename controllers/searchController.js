
const Provder = require("../models/userschema");
const Search = require("../models/search")

//search 
exports.searchSupmit = async (req, res) => {
    console.log(req.body);
    const search = new Search(req.body);
    search.save()
        .then(() => {
            res.redirect(`/searchPage?searchTerm`);
        })
        .catch(err => console.error(err));
};


exports.search = async (req, res) => {
    console.log('searchPage route hit');

    let searchTerm = req.query.searchTerm;

    try {
        const searchess = await Provder.find({
            title: { $regex: ".*" + searchTerm + ".*", $options: 'i' }
        });

        if (searchess.length > 0) {
            res.render("searchPage", {
                search_data: searchess,
            });


        } else
         {
            res.render("searchPage", {
                search_data: searchess,
                message: "No product found"
            });}
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
