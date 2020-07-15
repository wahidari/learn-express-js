// Display list of all books.
exports.index = function (req, res) {
    res.render('books/index', { title: 'Books' });
};

// Display book create form on GET method.
exports.create = function (req, res) {
    res.send('NOT IMPLEMENTED: Book create form');
};

// Handle book store on POST method.
exports.store = function (req, res) {
    res.send('NOT IMPLEMENTED: Store new book');
};

// Display detail page for a specific book.
exports.show = function (req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

// Display book edit form on GET method.
exports.edit = function (req, res) {
    res.send('NOT IMPLEMENTED: Book edit form');
};

// Handle book update on PATCH method.
exports.update = function (req, res) {
    res.send('NOT IMPLEMENTED: Update existing book');
};

// Handle book delete on DELETE method.
exports.destroy = function (req, res) {
    res.send('NOT IMPLEMENTED: Delete book by id');
};