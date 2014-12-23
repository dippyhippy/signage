var nano = require('nano')('http://localhost:5984');

var loader = function (loader, done) {
    console.log('loading components');

    var db = nano.use('signage');

    console.log('registerComponent: %s', typeof(loader.registerComponent) === 'function');

    db.view('signage', 'components', function (err, res) {
        if (!err) {
            res.rows.forEach(function (doc) {
                console.log(doc);
            });
        } else {
            done(err);
        }
    });

    console.log('registerGraph: %s', typeof(loader.registerGraph) === 'function');

    db.view('signage', 'graphs', function (err, res) {
        if (!err) {
            res.rows.forEach(function (doc) {
                loader.registerGraph('signage', doc.id, doc.json);
                console.log(doc);
            });
        } else {
            done(err);
        }
    });

    done(null);
};

module.exports = loader;