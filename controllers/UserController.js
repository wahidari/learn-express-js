// Display list of all users.
exports.index = function (req, res) {
    res.render('users/index', { title: 'Users' });
};

// Display User create form on GET method.
exports.create = function (req, res) {
    res.send('NOT IMPLEMENTED: User create form');
};

// Handle User store on POST method.
exports.store = function (req, res) {
    res.send('NOT IMPLEMENTED: Store new User');
};

// Display detail page for a specific User.
exports.show = function (req, res) {
    res.send('NOT IMPLEMENTED: User detail: ' + req.params.id);
};

// Display User edit form on GET method.
exports.edit = function (req, res) {
    res.send('NOT IMPLEMENTED: User edit form');
};

// Handle User update on PATCH method.
exports.update = function (req, res) {
    res.send('NOT IMPLEMENTED: Update existing User');
};

// Handle User delete on DELETE method.
exports.destroy = function (req, res) {
    res.send('NOT IMPLEMENTED: Delete User by id');
};