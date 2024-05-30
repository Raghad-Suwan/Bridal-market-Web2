
const Provder = require("../models/userschema");
const Search = require("../models/search")

//search 
exports.searchSupmit = async (req, res) => {
    console.log(req.body);
    const search = new Search(req.body);
    search.save()
        .then(() => {
            res.redirect(`/searchPage?searchTerm=${req.body.searchTerm}`);
        })
        .catch(err => console.error(err));
};
exports.search = async (req, res) => {
    console.log('searchPage route hit');
    console.log('Request query:', req.query);
    let searchTerm = req.query.searchTerm;

    const locals = {
        title: "Search",
        description: "Search in the system",
    };

    try {
        const search_data = await Provder.find({
            title: { $regex: ".*" + searchTerm + ".*", $options: 'i' }
        });

        if (search_data.length > 0) {
            res.render("searchPage", {
                search_data,
                locals
            });
        } else {
            res.render("searchPage", {
                search_data: [],
                locals,
                message: "No product found"
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
