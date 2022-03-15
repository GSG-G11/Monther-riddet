const { addPostDB } = require('../database/queries');
const { customErr } = require('../errors');

const addPost = (req, res) => {
    const { value } = req.body;
    const user_id = req.id;
    addPostDB(value, user_id)
    .then(data => res.json({message: 'post added'}))
    .catch((err) => err.details ? next(customErr('Something Wrong', 409)) : next(err));
};

module.exports = { addPost };